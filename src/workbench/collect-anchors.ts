import fs from 'fs-extra';
import documentGroups from '../../public/document-groups.json';
import bulkEvaluate from './util/bulkEvaluate';

const collectAnchors = async () => {
  const result = await bulkEvaluate({ inDir: './public/raw-html' }, () => {
    const [, groupName, pageName] = document.title.split(' / ');
    return Array.from(document.querySelectorAll('[id]'), (element) => {
      const headline = (
        element.tagName === 'SECTION' ? element.querySelector('h1,h2,h3,h4,h5') : element
      ) as HTMLElement;

      return {
        id: element.id,
        label:
          headline.textContent
            ?.trim()
            .toLowerCase()
            .replace(/\s+/, ' ')
            .replace(/(^[\wãàáäâẽèéëêìíïîõòóöôùúüûñç]{1})|(\s[\wãàáäâẽèéëêìíïîõòóöôùúüûñç]{1})/g, (match) =>
              match.toUpperCase(),
            )
            .replace(/\b(i{1,3}|iv|vi{0,3})\b/gi, (match) => match.toUpperCase())
            .replace(/’(.)/gi, (a) => a.toLowerCase()) || '',
        level: parseInt(headline.tagName.substr(1), 10),
        pageName,
        groupName,
      };
    });
  });

  const anchorResult = documentGroups.flatMap(({ pages }) => {
    return pages.flatMap((page) => {
      return result[`${page.basename}.html`].map((v) => ({
        ...v,
        filename: `${page.basename}.html`,
        basename: page.basename,
        hash: `#${v.id}`,
      }));
    });
  });

  fs.writeJSONSync('./src/anchors.json', anchorResult);
};

export default collectAnchors;
