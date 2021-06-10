import glossaryData from '../../glossary.json';
import bulkEvaluate from './util/bulkEvaluate';

const translate = async () => {
  await bulkEvaluate(
    {
      inDir: './public/raw-html-en',
      outDir: './public/raw-html',
      saveChanges: true,
      context: { glossary: glossaryData },
    },
    ({ glossary }: { glossary: Record<string, string> }) => {
      const objectiveElements: (HTMLElement & { textNodes: Node[] })[] = Array.from(
        document.querySelectorAll<HTMLElement & { textNodes: Node[] }>('h1,h2,h3,h4,h5,h6,strong,em,th,td'),
      ).filter(($0) => {
        if ($0.matches('h1 *,h2 *,h3 *,h4 *,h5 *,h6 *,strong *,em *,th *,td *') || !$0.textContent?.trim())
          return false;
        const textNodes = [] as Node[];
        const walker = document.createTreeWalker($0, NodeFilter.SHOW_TEXT, null);
        let node = walker.nextNode();
        while (node) {
          const value = node.nodeValue?.trim();
          if (value) {
            node.nodeValue = value;
            textNodes.push(node);
          }
          node = walker.nextNode();
        }
        if (!textNodes.length) return false;
        Object.assign($0, { textNodes });
        return true;
      });

      const objectiveTextNodes = objectiveElements.flatMap((element) => {
        return element.textNodes as (Node & { nodeValue: string })[];
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

          if (ko !== '(손)') document.title = document.title.replace(regex, ko);

          objectiveTextNodes.forEach((node) => {
            node.nodeValue = node.nodeValue.replace(regex, ko);
          });
        });
    },
  );
};

export default translate;
