import fse from 'fs-extra';
import glossary from '../../glossary.json';

const index = async () => {
  await fse.writeFile(
    'glossary.txt',
    Object.entries(glossary)
      .map((kv) => kv.join('\t'))
      .join('\n'),
  );
};

export default index;
