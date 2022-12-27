const bill_values = 275;
const tip = bill_values >= 50 && bill_values <= 300  ? bill_values * 0.15 : bill_values * 0.2;
console.log(`The bill was ${bill_values}, the tip was ${tip}, and the total value ${bill_values + tip}.`);