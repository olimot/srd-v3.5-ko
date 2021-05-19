import fs from 'fs-extra';
import modifyHtmls from './modifyHtmls';
import documentGroups from '../../public/document-groups.json';

const collectAnchors = async () => {
  const result = await modifyHtmls('./public/raw-html-en', './public/raw-html-en', () => {
    return Array.from(document.querySelectorAll('p'))
      .filter(p => p.textContent && /^[A-Z0-9\s]+$/.test(p.textContent || ''))
      .map(p => p.textContent!.trim()) as string[];
  });

  const anchorResult = documentGroups.flatMap(({ pages }) => {
    return pages.flatMap(page => {
      return result[`${page.basename}.html`].map(v => ({
        value: v,
        filename: `${page.basename}.html`,
        basename: page.basename,
      }));
    });
  });

  fs.writeJSONSync('./src/missing-anchors.json', anchorResult);
};

export default collectAnchors;
