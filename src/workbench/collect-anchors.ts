import fs from 'fs-extra';
import createEvaluateAllFunction from './util/createEvaluateAllFunction';
import basenames from '../../public/index.json';

const collectAnchors = async () => {
  const evaluate = createEvaluateAllFunction({ inDir: './public/raw-html' });

  const result = await evaluate(() => {
    const [, groupName, pageName] = document.title.split(' / ');
    return Array.from(document.querySelectorAll('[id]'), element => {
      const headline = (element.tagName === 'SECTION'
        ? element.querySelector('h1,h2,h3,h4,h5')
        : element) as HTMLElement;

      return {
        id: element.id,
        label:
          headline.textContent
            ?.trim()
            .toLowerCase()
            .replace(/\s+/, ' ')
            .replace(/(^\w{1})|([^a-zA-Z]\w{1})/g, match => match.toUpperCase())
            .replace(/\b(i{1,3}|iv|vi{0,3})\b/gi, match => match.toUpperCase()) || '',
        level: parseInt(headline.tagName.substr(1), 10),
        pageName,
        groupName,
      };
    });
  });

  const anchorResult = basenames.flatMap(basename =>
    result[`${basename}.html`].map(v => ({ ...v, filename: `${basename}.html`, basename, hash: `#${v.id}` })),
  );

  fs.writeJSONSync('./src/anchors.json', anchorResult);
};

export default collectAnchors;
