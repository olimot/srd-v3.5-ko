import fs from 'fs-extra';
import anchorsEn from '../anchors-en.json';

const index = async () => {
  console.log('Processing anchors...');
  const list = anchorsEn.reduce((prev, item) => {
    const groupNameValue = ` group-name:${item.groupName}`;
    const pageNameValue = ` page-name:${item.pageName}`;
    if (item.level === 1) {
      if (prev.indexOf(groupNameValue) === -1) return [...prev, groupNameValue, pageNameValue, item.id];
      return [...prev, pageNameValue, item.id];
    }
    return [...prev, item.id];
  }, [] as string[]);

  await fs.writeFile('./headline-list-id.json', JSON.stringify(list, null, 2));
};

export default index;
