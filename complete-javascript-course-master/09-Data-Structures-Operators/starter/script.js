'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your declicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// // unpacking the array into variables
// const arr = [2, 3, 4];

// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;

// console.log(a, b, c);
// console.log(x, y, z);

// // omit the second element of the array [x, , z]
// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// // to swap items
// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// // we can also do it like this
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// console.log(restaurant.order(2, 0));
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// // you can assign an array to a variable
// const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

// // but if we want to unpack an array that is in an array then we can
// const [k, , [f, g]] = nested;
// console.log(k, f, g);

// let [p, q, r] = [8, 9];
// console.log(p, q, r); // r - undefined

// [p = 1, q = 1, r = 1] = [8, 9]; // r=1
// console.log(p, q, r);

// // 104 Destructuring objects

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restarantName,
//   openingHours: hours,
//   categories: tag,
// } = restaurant;
// console.log(restarantName, hours, tag);

// //  Default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj); //must be a parenthesis
// console.log(a, b);

// // Nested objects
// const {
//   // here we could unpack fri because there was already a variable openingHours that was previously unpacked
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// // // you can, !!!mine!!!
// // const { open, close } = restaurant.openingHours.fri;
// // console.log(open, close);

// // you can, !!!mine!!!
// const {
//   openingHours: {
//     fri: { open, close },
//   },
// } = restaurant;
// console.log(open, close);

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: 'Via del Sole, 234',
//   starterIndex: 1,
// });

// // 105 The Spread Operator
// const arr = [7, 8, 9];

// const newArr2 = [1, 2, arr];
// console.log(newArr2);

// const newArr = [1, 2, ...arr];
// console.log(newArr);

// console.log(...newArr);

// const newManu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newManu);

// // Copy array
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

// // Join 2 arrays
// const manu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(manu);
// // ... works for all iterables (arrays, strings, maps, sets) but not objects
// const str = 'Jonas';
// const letters = [...str, ' ', 'S.'];
// console.log(letters);

// const ingredients = [
//   prompt("Let's make pasta Ingredient 1?"),
//   prompt('Ingredient 1?'),
//   prompt('Ingredient 3?'),
// ];
// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

// const newRestaurant = { fundedIn: 1998, ...restaurant, funder: 'Guiseppe' };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Chata Skrzata';
// console.log(restaurant.name);
// console.log(restaurantCopy.name);

// // 106 rest pattern

// // Spred - ... on right side =
// const arr = [1, 2, ...[3, 4]];

// // rest - ... on left side =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);
// console.log([...restaurant.mainMenu, ...restaurant.starterMenu]);

// // Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(sat);
// console.log(weekdays);

// const add = function (...numbers) {
//   console.log(numbers);
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };

// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
// restaurant.orderPizza('mushrooms');

// // Short Circuiting
// console.log('------  OR ------');
// console.log(3 || 'Jonas'); // 3
// console.log('' || 'Jonas'); // Jonas
// console.log(true || 0); // true
// console.log(undefined || null); // null
// console.log('' || undefined || 0); // 0 last value

// console.log(undefined || 0 || '' || null || 'Hello' || 23); // Hello

// // restaurant.numGuests = 23;
// console.log(Boolean(restaurant.numGuests));
// const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guest1);

// const guest2 = restaurant.numGuests || 11;
// console.log(guest2);

// console.log('------  AND ------');
// console.log('Jonas' && 6);
// console.log(0 && 6);
// console.log('Jonas' && null);
// console.log('Jonas' && 6 && undefined && 4 && 0);
// console.log(0 && '');

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('onion', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('onion', 'onion');

// // 108 The Nullish Coalescing Operator ??
// restaurant.numGuests = 0;
// const guest1 = restaurant.numGuests || 10;
// console.log(guest1);

// // Nullish: null and undefined ( NO: ' ' or 0 - prawda)
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

// 109 Logical Assignment Operators
const rest1 = {
  name: 'Capri',
  numGuests: 20,
};

const rest2 = {
  name: 'La Pizza',
  owner: 'Giovanni Rossi',
};

const rest3 = {
  name: 'Capri',
  numGuests: 0,
};

// Or assigment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

rest1.numGuests ||= 10;
rest2.numGuests ||= 10;

// Nullish assignment operator (null or undefined)
rest3.numGuests ??= 10;

// rest1.owner = rest1.owner && ; // add owner to rest1 - undefined
// rest2.owner = rest2.owner && '<ANONYMOUS>';

rest1.owner &&= '<ANONYMOUS>'; // owner does not exist in this object
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);
console.log(rest3);
