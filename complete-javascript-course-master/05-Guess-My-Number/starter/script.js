'use strict';

// drawing a number
const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;

// setting max points to 20
let currentScore = 20;

// action after pressing the check button!
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No number!!!';

    // When player win
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number !!!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // When guess is too high
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = 'Too high !';
    currentScore--;
    document.querySelector('.score').textContent = currentScore;

    // When guess is too low
  } else {
    document.querySelector('.message').textContent = 'Too low !';
    currentScore--;
    document.querySelector('.score').textContent = currentScore;
  }

  // information about losing the game when the score is 0
  if (!currentScore) {
    document.querySelector('.message').textContent = 'You lost the game !!!';
  }
});
