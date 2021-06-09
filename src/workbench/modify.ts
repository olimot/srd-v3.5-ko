import bulkEvaluate from './util/bulkEvaluate';

const modify = async () => {
  await bulkEvaluate(
    {
      inDir: './public/raw-html',
      outDir: './public/raw-html',
      saveChanges: true,
    },
    () => {
      document.querySelectorAll<HTMLElement>('[title]').forEach((element) => {
        element.dataset.en = element.title;
        element.removeAttribute('title');
      });
    },
  );
};

export default modify;
