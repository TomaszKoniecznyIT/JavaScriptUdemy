document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const textSplit = text.split('\n');
  let box = '✅';
  for (let i = 0; i < textSplit.length; i++) {
    const ver = textSplit[i].trim().split('_');
    const retVar =
      ver[0].toLocaleLowerCase() +
      ver[1][0].toUpperCase() +
      ver[1].slice(1).toLowerCase();

    console.log(retVar.padEnd(25, ' ') + box);
    box += '✅';
  }
});
