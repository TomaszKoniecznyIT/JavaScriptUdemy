'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;

let currentScore = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = 'No number!!!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number !!!';
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = 'Too high !';
    currentScore--;
    document.querySelector('.score').textContent = currentScore;
  } else {
    document.querySelector('.message').textContent = 'Too low !';
    currentScore--;
    document.querySelector('.score').textContent = currentScore;
  }
});
