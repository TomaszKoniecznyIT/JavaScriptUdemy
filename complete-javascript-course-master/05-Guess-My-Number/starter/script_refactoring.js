'use strict';

// drawing a number
const drawingNumber = () => Math.trunc(Math.random() * 20) + 1;

// message function (class in which it is displayed, message content)
const messageForClass = (classMes, message) =>
  (document.querySelector(classMes).textContent = message);

// clearing the field receiving the number from the player
const clearingGuess = () => (document.querySelector('.guess').value = '');

let secretNumber = drawingNumber();

// setting max points to 20
let currentScore = 20;

// setting highscore
let highscore = 0;

// action after pressing the check! button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    messageForClass('.message', 'No number!!!');

    // When player win
  } else if (guess === secretNumber) {
    messageForClass('.message', 'Correct Number !!!');
    messageForClass('.number', secretNumber);
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // checks if the new result is not a record
    if (currentScore > highscore) highscore = currentScore;
    messageForClass('.highscore', highscore);

    // When guess is too high
  } else if (guess !== secretNumber) {
    messageForClass(
      '.message',
      guess > secretNumber ? 'Too high !' : 'Too low !'
    );
    currentScore--;
    messageForClass('.score', currentScore);

    // information about losing the game when the score is 0
    if (!currentScore) {
      messageForClass('.message', 'You lost the game !!!');
    }
    clearingGuess();
  }
});

// action after pressing the again! button
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = drawingNumber();
  currentScore = 20;
  messageForClass('.score', currentScore);
  messageForClass('.number', '?');
  messageForClass('.message', 'Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  clearingGuess();
});
