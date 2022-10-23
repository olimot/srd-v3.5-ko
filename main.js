fetch('/glossary.tsv').then(async (res) => {
  const tsv = await res.text();
  const pairs = tsv.split('\n').map((line) => line.split('\t'));
  console.log(pairs);
});

document.body.contentEditable = true;

document.body.addEventListener('paste', (e) => {
  e.preventDefault();
  const text = (e.originalEvent || e).clipboardData.getData('text/plain');
  document.execCommand('insertText', false, text);
});
