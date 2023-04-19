// 281

// var to const or let
const budget = [
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
];

const spendingLimits = {
  jonas: 1500,
  matilda: 100,
};

const getLimit = user => spendingLimits?.[user] ?? 0;

const addExpense = function (value, description, user = 'jonas') {
  user = user.toLowerCase();

  // let lim;
  // if (spendingLimits[user]) {
  //   lim = spendingLimits[user];
  // } else {
  //   lim = 0;
  // }
  // const limit = spendingLimits[user] ? spendingLimits[user] : 0; // 1.
  // const limit = spendingLimits?.[user] ?? 0;
  // const limit = getLimit(user);

  // if (value <= limit) {
  //   budget.push({ value: -value, description: description, user: user });
  // }
  if (value <= getLimit(user)) {
    budget.push({ value: -value, description, user });
  }
};
addExpense(10, 'Pizza 🍕');
addExpense(100, 'Going to movies 🍿', 'Matilda');
addExpense(200, 'Stuff', 'Jay');

// const checkExpeses = function () {
//   for (const entry of budget) {
//     let lim;
//     if (spendingLimits[entry.user]) {
//       lim = spendingLimits[entry.user];
//     } else {
//       lim = 0;
//     }

//     if (entry.value < -lim) {
//       entry.flag = 'limit';
//     }
//   }
// };
const checkExpeses = function () {
  // const limit = spendingLimits?.[entry.user] ?? 0;

  for (const entry of budget)
    if (entry.value < -getLimit(entry.user)) entry.flag = 'limit';
};
checkExpeses();

// const logBigExpenses = function (biglimit) {
//   let output = '';
//   for (const el of budget) {
//     if (el.value <= -biglimit) {
//       output += el.description.slice(-2) + ' / '; // Emojis are 2 chars
//     }
//   }
//   output = output.slice(0, -2); // Remove last '/ '
//   console.log(output);
// };

const logBigExpenses = function (biglimit) {
  let output = '';
  for (const entry of budget)
    output +=
      entry.value <= -biglimit ? `${entry.description.slice(-2)} / ` : ''; // Emojis are 2 chars

  output = output.slice(0, -2); // Remove last '/ '
  console.log(output);
};

console.log(budget);
logBigExpenses(1000);
for (const entry of budget) console.log(entry);
