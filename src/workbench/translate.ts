import modifyHtmls from './modifyHtmls';
import idList from '../../headline-list-id.json';
import koList from '../../headline-list-ko.json';

const index = async () => {
  console.log('Translating...');

  const theDictionary = idList.reduce((prev, en, i) => {
    return { ...prev, [en]: prev[en] || koList[i] };
  }, {} as Record<string, string>);

  await modifyHtmls(
    './public/raw-html-en',
    './public/raw-html-ko',
    id2ko => {
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
        headline.textContent = value;
      });
    },
    theDictionary,
  );
};

export default index;
