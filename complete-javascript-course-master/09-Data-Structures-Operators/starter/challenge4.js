document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const textSplit = text.split('_');
  let returnText = [textSplit[0]];
  for (let i = 1; i < textSplit.length; i++) {
    returnText.push(textSplit[i][0].toUpperCase() + textSplit[i].slice(1));
  }
  console.log(returnText.join(''));
});
