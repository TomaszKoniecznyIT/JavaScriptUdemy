// 283
'use strict';

const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);

const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});
// spendingLimits.joy = 400;
// console.log(spendingLimits);

// const getLimit = user => spendingLimits?.[user] ?? 0;
const getLimit = (limits, user) => limits?.[user] ?? 0;

// Pure function
const addExpense = function (
  state,
  limits,
  value,
  description,
  user = 'jonas'
) {
  const cleanUser = user.toLowerCase();

  //   if (value <= getLimit(cleanUser)) {
  //     // budget.push({ value: -value, description, user: cleanUser });
  //     return [...state, { value: -value, description, user: cleanUser }];
  //   }

  return value <= getLimit(limits, cleanUser)
    ? [...state, { value: -value, description, user: cleanUser }]
    : state;
};

// addExpense(budget, spendingLimits, 10, 'Pizza 🍕');
const newBudget1 = addExpense(budget, spendingLimits, 10, 'Pizza 🍕');
const newBudget2 = addExpense(
  newBudget1,
  spendingLimits,
  100,
  'Going to movies 🍿',
  'Matilda'
);
const newBudget3 = addExpense(
  newBudget2,
  spendingLimits,
  100,
  'Stuff',
  'Matilda'
);
console.log(budget);
console.log(newBudget1);
console.log(newBudget2);
console.log(newBudget3);

// const checkExpeses = function () {
//   for (const entry of budget)
//     if (entry.value < -getLimit(entry.user)) entry.flag = 'limit';
// };

const checkExpeses2 = function (state, limits) {
  //   for (const entry of newBudget3)
  //     if (entry.value < -getLimit(limits, entry.user)) entry.flag = 'limit';
  return state.map(entry => {
    return entry.value < -getLimit(limits, entry.user)
      ? { ...entry, flag: 'limit' }
      : entry;
  });
};

const checkExpeses = (state, limits) =>
  state.map(entry =>
    entry.value < -getLimit(limits, entry.user)
      ? { ...entry, flag: 'limit' }
      : entry
  );

const finalBudget = checkExpeses(newBudget3, spendingLimits);
console.log(finalBudget);

// const logBigExpenses = function (biglimit) {
//   let output = '';
//   for (const entry of budget)
//     output +=
//       entry.value <= -biglimit ? `${entry.description.slice(-2)} / ` : ''; // Emojis are 2 chars

//   output = output.slice(0, -2); // Remove last '/ '
//   console.log(output);
// };

const logBigExpenses = function (state, biglimit) {
  const bigExpenses = state
    .filter(entry => entry.value <= -biglimit)
    .map(entry => entry.description.slice(-2))
    .join('/');

  console.log(bigExpenses);
};

logBigExpenses(finalBudget, 1000);
