'use strict';

// Selecting elements
const score0El = document.querySelector('#score--0');
const currentScore0El = document.querySelector('#current--0');
const player0El = document.querySelector('.player--0');

const scote1El = document.getElementById('score--1');
const currentScore1El = document.getElementById('current--1');
const player1El = document.querySelector('.player--1');

const diceEl = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
score0El.textContent = 0;
scote1El.textContent = 0;
diceEl.classList.add('hidden');

let totaleScore = [0, 0];
let currentScore = 0;
let activePlayer = 0;

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  // 1. Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  // 2. Display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  // 3. Check for rolled 1
  if (dice !== 1) {
    // Add dice to current score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // Switch to next player
    switchPlayer();
  }
});

// Holding current score
btnHold.addEventListener('click', function () {
  // 1. Add current score to active player's score
  totaleScore[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    totaleScore[activePlayer];

  // 2. Check if player's score >= 100
  if (totaleScore[activePlayer] >= 13) {
    // Finish the game
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    console.log(document.querySelector(`.player--${activePlayer}`));
    //if we don't do it, both settings for these classes will be active (nothing will change in appearance, because the last class is player--winner)
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
  } else {
    // Switch to the next player
    switchPlayer();
  }
});
