import fs from 'fs-extra';
import anchorsEn from '../anchors-en.json';
import anchors from '../anchors.json';

const sanitize = (str: string) => str.replace(/[\r\n\s]+/g, ' ').trim();

const index = async () => {
  console.log('Processing anchors...');
  const list = anchorsEn.reduce((prev, item) => {
    const groupName = sanitize(item.groupName);
    const pageName = sanitize(item.pageName);
    const label = sanitize(item.label);
    if (item.level === 1) {
      if (prev.indexOf(groupName) === -1) return [...prev, groupName, pageName, label];
      return [...prev, pageName, label];
    }
    return [...prev, label];
  }, [] as string[]);

  await fs.writeFile('./headline-list-en.json', JSON.stringify(list, null, 2));
};

export default index;
