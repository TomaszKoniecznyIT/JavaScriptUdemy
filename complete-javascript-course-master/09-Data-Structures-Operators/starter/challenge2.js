const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1
console.log('--- 1 ---');

for (const [goal, player] of game.scored.entries()) {
  console.log(`Goal ${goal + 1}: ${player}.`);
}

// 2
console.log('--- 2 ---');

const avgOdd = function (obj) {
  sum = 0;
  for (const value of Object.values(obj)) {
    sum += value;
  }
  console.log(`average odd ${sum / Object.values(obj).length}`);
};
avgOdd(game.odds);

// course solution
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);

// 3
console.log('--- 3 ---');

const oddsKeyVal = Object.entries(game.odds);
for (const [inf, odd] of oddsKeyVal) {
  console.log(
    `Odd of ${inf === 'x' ? 'draw' : 'victory ' + game[inf]} : ${odd}`
  );
}

// Bonus
console.log('--- Bonus ---');

const scorers = {};
for (const i of Object.values(game.scored)) {
  scorers[i] = scorers[i] + 1 || 1;
}
console.log(scorers);
