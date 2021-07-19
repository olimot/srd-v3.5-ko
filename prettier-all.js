const fse = require('fs-extra');
const os = require('os');
const prettier = require('prettier');
const prettierConfig = require('./.prettierrc');
const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');

const numCPUs = os.cpus().length;
process.setMaxListeners(numCPUs);
const htmlPrettierOptions = { ...prettierConfig, parser: 'html' };
const targetDir = './public/raw-html';
if (isMainThread) {
  fse.readdir(targetDir).then(async (files) => {
    let doneCount = 0;
    const maxThreads = Math.min(files.length, numCPUs - 1);
    const threads = new Set(
      Array.from(
        Array(maxThreads),
        (_, i) =>
          new Worker(__filename, {
            workerData: { i, files: files.filter((__, j) => j % maxThreads === i) },
          }),
      ),
    );
    for (let worker of threads) {
      worker.on('error', (err) => {
        throw err;
      });
      worker.on('exit', () => {
        threads.delete(worker);
        console.log(`Thread exiting, ${threads.size} running...`);
      });
      worker.on('message', (file) => {
        doneCount += 1;
        console.log(`${doneCount}/${files.length} DONE ${file}`);
      });
    }
  });
} else {
  workerData.files.reduce(async (prevP, file) => {
    await prevP;
    const html = await fse.readFile(`${targetDir}/${file}`, 'utf8');
    await fse.writeFile(`${targetDir}/${file}`, prettier.format(html, htmlPrettierOptions));

    parentPort.postMessage(file);
  }, Promise.resolve());
}
