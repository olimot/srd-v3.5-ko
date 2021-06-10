import fs from 'fs-extra';
import glossaryData from '../../glossary.json';
import documentGroups from '../../public/document-groups.json';
import bulkEvaluate from './util/bulkEvaluate';

const fileNameOrder = documentGroups.flatMap((group) => group.pages.map((page) => `${page.basename}.html`));

interface TempHTMLElement extends HTMLElement {
  enTexts: string[];
  koTexts: string[];
}

type RealGlossaryItem = string;

interface RealGlossary {
  [key: string]: RealGlossaryItem | RealGlossaryItem[];
}

const translate = async () => {
  const result = await bulkEvaluate(
    { inDir: './public/raw-html-en', saveChanges: false, context: { glossary: glossaryData } },
    ({ glossary }: { glossary: Record<string, string> }) => {
      const objectiveElements: TempHTMLElement[] = Array.from(
        document.querySelectorAll<TempHTMLElement>('title,h1,h2,h3,h4,h5,h6,strong,em,th,td'),
      ).filter(($0) => {
        if ($0.matches('h1 *,h2 *,h3 *,h4 *,h5 *,h6 *,strong *,em *,th *,td *') || !$0.textContent?.trim())
          return false;
        const textNodeContents = [] as string[];
        const walker = document.createTreeWalker($0, NodeFilter.SHOW_TEXT, null);
        let node = walker.nextNode();
        while (node) {
          const value = node.nodeValue?.trim();
          if (value && /[a-z]/i.test(value)) textNodeContents.push(value);
          node = walker.nextNode();
        }
        if (!textNodeContents.length) return false;
        const texts = textNodeContents
          .flatMap((content) => {
            const splited = content
              .replace(/:$/, '')
              .replace(/x?([0-9]+)(st|nd|rd|th)/gi, '$1')
              .replace(/([0-9]+d[0-9]+|\+|-| (sq.|ft.|lb.|gp|sp|cp|oz.)(?!\s|$))/gi, ';')
              .split(/\s*[0-9/,;()[\]]+\s*/);
            return splited.map((s) => s.trim());
          })
          .filter((s) => s.length > 1 && /[a-z]/i.test(s))
          .map((s) => s.replace(/(^[—–]{2,}\s*|\s*[—–]{2,}$)/g, ''))
          .filter((s) => s);
        if (!texts.length) return false;
        Object.assign($0, { enTexts: texts, koTexts: texts.slice() });
        return true;
      });

      Object.entries(glossary)
        .sort((a, b) => b[0].replace(/~/g, '').length - a[0].replace(/~/g, '').length)
        .forEach(([en, ko]) => {
          const prefixRe = en[0] === '~' ? '' : `(?<![a-z])(a |the |an )?`;
          const suffixRe = en[en.length - 1] === '~' ? '' : `(es|s)?(?![a-z’])`;
          let t = en;
          if (en[0] === '~') t = t.substr(1);
          if (en[en.length - 1] === '~') t = t.substr(0, t.length - 1);
          const regex = new RegExp(`(${prefixRe}${t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}${suffixRe})`, 'gi');

          objectiveElements.forEach(($0) => {
            if (ko === '(손)' && $0.tagName === 'TITLE') return;
            for (let i = 0; i < $0.koTexts.length; i += 1) {
              $0.koTexts[i] = $0.koTexts[i].replace(regex, ko);
            }
          });
        });

      return objectiveElements.map(($0) => {
        return { tagName: $0.tagName, en: $0.enTexts, ko: $0.koTexts };
      });
    },
  );
  const organized = fileNameOrder.flatMap((fileName) => result[fileName]);
  const realGlossary: RealGlossary = organized.reduce(
    (outerPrev, { en: ens, ko: kos }) =>
      ens.reduce((prev, unsafeEn, i) => {
        const en = unsafeEn.toLowerCase();
        const ko = kos[i];
        if (!prev[en]) return { ...prev, [en]: ko };
        const prevArray = prev[en] instanceof Array ? (prev[en] as RealGlossaryItem[]) : [prev[en] as RealGlossaryItem];
        if (!prevArray.find((prevItem) => prevItem.toLowerCase() === ko.toLowerCase()))
          return { ...prev, [en]: [...prevArray, ko] };
        return prev;
      }, outerPrev),
    {} as RealGlossary,
  );

  await fs.writeJSON(
    'translations.json',
    Object.fromEntries(
      Object.entries(realGlossary).sort(([a], [b]) => {
        if (a.length === b.length) return a.localeCompare(b);
        return a.length - b.length;
      }),
    ),
  );
};

export default translate;
