const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

console.log('---- 1 ----');
const events = [...new Set(gameEvents.values())];
console.log(events);

console.log('---- 2 ----');
gameEvents.delete(64);
console.log(gameEvents);

console.log('---- 3 ----');
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

// course bonus
const time = [...gameEvents.keys()].pop();
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);

console.log('---- 4 ----');
for (const [key, value] of gameEvents)
  console.log(`[${key <= 45 ? 'FIRST' : 'SECOND'} HALF] ${key} : ${value}`);
