import glossaryFinal from '../../glossary-final.json';
import bulkEvaluate from './util/bulkEvaluate';

const translate = async () => {
  await bulkEvaluate(
    {
      inDir: './public/raw-html-en',
      outDir: './public/raw-html',
      saveChanges: true,
      context: { glossary: glossaryFinal },
    },
    ({ glossary }: { glossary: Record<string, string> }) => {
      const objectiveElements = Array.from(
        document.querySelectorAll<HTMLElement>('h1,h2,h3,h4,h5,h6,strong,em,th'),
      ).filter((element) => !element.matches('h1 *,h2 *,h3 *,h4 *,h5 *,h6 *,strong *,em *,th *'));

      objectiveElements.forEach(($0) => {
        $0.title = $0.innerText?.trim();
      });

      Object.entries(glossary)
        .sort((a, b) => b[0].replace(/~/g, '').length - a[0].replace(/~/g, '').length)
        .forEach(([en, ko]) => {
          const prefixRe = en[0] === '~' ? '' : `(?<![a-z])(a |the |an )?`;
          const suffixRe = en[en.length - 1] === '~' ? '' : `(es|s)?(?![a-z])`;
          let t = en;
          if (en[0] === '~') t = t.substr(1);
          if (en[en.length - 1] === '~') t = t.substr(0, t.length - 1);
          const regex = new RegExp(`(${prefixRe}${t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}${suffixRe})`, 'gi');

          document.title = document.title.replace(regex, ko);

          objectiveElements.forEach(($0) => {
            const walker = document.createTreeWalker($0, NodeFilter.SHOW_TEXT, null);
            let node = walker.nextNode();
            while (node) {
              if (node.nodeValue?.trim()) {
                node.nodeValue = node.nodeValue.replace(regex, ko);
              }
              node = walker.nextNode();
            }
          });
        });
    },
  );
};

export default translate;
