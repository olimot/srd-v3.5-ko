import fse from 'fs-extra';
import { JSDOM } from 'jsdom';
import documentGroups from '../../public/document-groups.json';

const index = async () => {
  const fileNames = documentGroups.flatMap((group) => group.pages.map((p) => `${p.basename}.html`));
  const dir = './public/raw-html-en';
  const htmls = await Promise.all(
    fileNames.map(async (fileName) => {
      const html = await fse.readFile(`${dir}/${fileName}`, 'utf8');
      const dom = new JSDOM(html);
      return dom.window.document.querySelector('body')?.innerHTML as string;
    }),
  );

  const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>v3.5 SRD</title>
  </head>
  <body>
    ${htmls.map(a => `<article>${a}</article>`).join('\n    ')}
  </body>
</html>`;

  await fse.writeFile('./v3.5-srd.html', html);
};

export default index;
