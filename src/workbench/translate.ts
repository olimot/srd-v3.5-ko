import modifyHtmls from './modifyHtmls';
import idList from '../../headline-list-id.json';
import hko from '../../headline-list-ko.json';
import hen from '../../headline-list-en.json';

const index = async () => {
  console.log('Translating...');

  const theHeadlineDict = idList.reduce((prev, en, i) => {
    return { ...prev, [en]: prev[en] || hko[i] };
  }, {} as Record<string, string>);

  const theDictEntries = hen
    .reduce((prev, enWord, i) => {
      const koWord = hko[i];
      const mainEnWord = (enWord.match(/([^[(]*)/) || [])[0]?.trim() || '';
      const mainKoWord = (koWord.match(/([^[(]*)/) || [])[0]?.trim() || '';
      const prevIdx = prev.findIndex(l => l[0] === mainEnWord);
      if (mainEnWord) {
        if (prevIdx === -1) return [...prev, [mainEnWord, mainKoWord]];
        if (prev[prevIdx].indexOf(mainKoWord) === -1)
          return [...prev.slice(0, prevIdx), [...prev[prevIdx], mainKoWord], ...prev.slice(prevIdx + 1)];
      }
      return prev;
    }, [] as string[][])
    .sort((a, b) => b[0].length - a[0].length);

  const dictConflicts = theDictEntries.filter(innerlist => innerlist.length !== 2);
  if (dictConflicts.length) {
    console.log('The translation has some conflicts:');
    console.log(dictConflicts);
    return;
  }

  await modifyHtmls(
    './public/raw-html-en',
    './public/raw-html-ko',
    ({ theHeadlineDict: id2ko, theDictEntries: dictEntries }) => {
      const [, groupNameEn, pageNameEn] = document.title.split(' / ');
      const groupNameKo = id2ko[` group-name:${groupNameEn}`];
      const pageNameKo = id2ko[` page-name:${pageNameEn}`];
      document.title = `SRD v3.5 / ${groupNameKo} / ${pageNameKo}`;
      Object.entries(id2ko).forEach(([id, value]) => {
        if (id[0] === ' ') return;
        const section = document.getElementById(id);
        if (!section) return;
        const headline = (section.tagName === 'SECTION'
          ? section.querySelector('h1,h2,h3,h4,h5')
          : section) as HTMLElement;
        if (!headline) return;
        const originalText = headline.textContent;
        headline.textContent = value;
        const originalTextDiv = document.createElement('div');
        originalTextDiv.className = 'original-headline';
        originalTextDiv.textContent = originalText;
        headline.insertAdjacentElement('afterend', originalTextDiv);
      });
      if (pageNameKo === '법률정보') return;

      dictEntries.forEach(([findWord, replaceWord]) => {
        if (!findWord) return;
        const findRe = new RegExp(
          `\\b${findWord.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/\s+/g, '\\s+')}(s|es)?\\b`,
          'gi',
        );
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
        let node = walker.nextNode();
        while (node) {
          if (node.nodeValue && node.parentElement?.className !== 'original-headline')
            node.nodeValue = node.nodeValue.replace(findRe, replaceWord);
          node = walker.nextNode();
        }
      });
    },
    { theHeadlineDict, theDictEntries },
  );
};

export default index;
