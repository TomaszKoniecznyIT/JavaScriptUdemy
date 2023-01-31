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
const [players1, players2] = game.players;
console.log(players1);
console.log(players2);

//2
console.log('--- 2 ---');
const [gk1, ...fieldPlayers1] = players1;
const [gk2, ...fieldPlayers2] = players2;
console.log(gk1);
console.log(fieldPlayers1);
console.log(gk2);
console.log(fieldPlayers2);

//3
console.log('--- 3 ---');
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//4
console.log('--- 4 ---');
const substitutePlayers = ['Thiago', 'Coutinho', 'Perisic'];
const players1Final = [...players1, ...substitutePlayers];
console.log(players1Final);

// 5
console.log('--- 5 ---');
const { team1, x: draw, team2 } = game.odds;
console.log(team1);
console.log(draw);
console.log(team2);

//6

console.log('--- 6 ---');

// my solution
// const printsGoals = function (obj) {
//   const x = [...obj];
//   console.log(x);
//   for (let i = 0; i < x.length; i++) console.log(x[i]);
//   console.log('Total', x.length);
// };
// printsGoals(game.scored);

// course solution
const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
  for (let i = 0; i < players.length; i++) console.log(players[i]);
};
printGoals(...game.scored);

//7
console.log('--- 7 ---');
// the team with the smaller number has a better chance (team1, team2)
team1 < team2 && console.log('Team 1 is more likely to win.');
team1 > team2 && console.log('Team 2 is more likely to win.');
