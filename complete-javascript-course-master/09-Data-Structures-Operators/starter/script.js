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

// // 109 Logical Assignment Operators
// const rest1 = {
//   name: 'Capri',
//   numGuests: 20,
// };

// const rest2 = {
//   name: 'La Pizza',
//   owner: 'Giovanni Rossi',
// };

// const rest3 = {
//   name: 'Capri',
//   numGuests: 0,
// };

// // Or assigment operator
// // rest1.numGuests = rest1.numGuests || 10;
// // rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// // Nullish assignment operator (null or undefined)
// rest3.numGuests ??= 10;

// // rest1.owner = rest1.owner && ; // add owner to rest1 - undefined
// // rest2.owner = rest2.owner && '<ANONYMOUS>';

// rest1.owner &&= '<ANONYMOUS>'; // owner does not exist in this object
// rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);
// console.log(rest3);

// // 111. Looping arrays: The for-of Loop

// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// for (const item of menu) console.log(item);

// console.log([...menu.entries()]);

// for (const item of menu.entries()) {
//   // console.log(item); // [i, item]
//   console.log(`${item[0] + 1}: ${item[1]}`);
// }

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

// // 112. Enhanced Object Literals

// const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri'];

// const openingHours1 = {
//   [weekdays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekdays[4]]: {
//     open: 11,
//     close: 23,
//   },
//   [`day-${2 + 4}`]: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

// const restaurant2 = {
//   name: 'Bella Pizza',
//   openingHours1,
// };

// console.log(restaurant2);
// console.log(openingHours1.thu);
// console.log(openingHours1['day-6']);

// // 113 Optional Chaining (?.)

// if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open); // not exist mon
// if (restaurant.openingHours.fri) console.log(restaurant.openingHours.fri.open);

// // console.log(restaurant.openingHours.mon.open); // error
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// // Example
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open}.`);
// }

// // Methods
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// console.log(restaurant.orderRisoto?.(0, 1) ?? 'Method does not exist');

// // Array
// const users = [{ name: 'Jonas', email: 'hello@wp.pl' }];
// console.log(users[0]?.name ?? 'User array empty');

// 114 Looping Objects: object Keys, Values and Entries

// // Property Name
// const properties = Object.keys(restaurant.openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days: `;

// for (const day of properties) {
//   openStr += `${day}, `;
// }
// console.log(openStr);

// // Property Values
// const values = Object.values(restaurant.openingHours);
// console.log(values);

// //
// const entries = Object.entries(restaurant.openingHours);
// console.log(entries);

// for (const x of entries) {
//   console.log(x);
// }

// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

// // 116 Sets

// const ordersSet = new Set(['Pizza', 'Pasta', 'Pizza']);

// console.log(ordersSet);
// console.log(ordersSet.size);

// console.log(ordersSet.has('Pizza')); // true
// console.log(ordersSet.has('Bread')); // false

// ordersSet.add('Garlik Bread');
// ordersSet.add('Garlik Bread');
// console.log(ordersSet);

// ordersSet.delete('Garlik Bread');
// console.log(ordersSet);

// // ordersSet.clear() // cleans everything

// for (const order of ordersSet) console.log(order);

// // Example
// const staff = ['Waiter', 'Waiter', 'Waiter', 'Chef', 'Chef'];
// const staffUnique = new Set(staff);
// console.log(staffUnique);
// const staffUnique1 = [...new Set(staff)]; // array
// console.log(staffUnique1);

// console.log(new Set(['Waiter', 'Waiter', 'Waiter', 'Chef', 'Chef']).size);
// console.log(new Set('JonasTomas').size);

// // 117. Maps
// const restur = new Map();
// restur.set('name', 'Italo Pizza');
// restur.set(1, 'Firenze, Italy');
// console.log(restur.set(2, 'Lisbon, Portugal'));

// restur
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open')
//   .set(false, 'We are closed');

// console.log(restur.get('name'));
// console.log(restur.get(true));
// console.log(restur.get(1));

// const time = 8;
// console.log(
//   restur.get(time > restur.get('open') && time < restur.get('close'))
// );

// console.log(restur.has('categories'));
// restur.delete(1);
// console.log(restur);
// console.log(restur.size);
// // restur.clear()

// const arr = [1, 2];
// restur.set([1, 2], 'Test');
// console.log(restur);
// console.log(restur.get([1, 2])); // undefined
// restur.set(arr, 'Test');
// console.log(restur.get(arr));
// restur.set(document.querySelector('h1'), 'Heading');
// console.log(restur);

// // 118 Maps: Iteration

// const question = new Map([
//   ['question', 'What is the best programing language in the word?'],
//   [1, 'C'],
//   [2, 'Java Script'],
//   [3, 'Python'],
//   ['correct', 3],
//   [true, 'Correct'],
//   [false, 'Try again'],
// ]);
// console.log(question);

// // Convert object to map
// console.log(Object.entries(restaurant.openingHours));
// const hoursMap = new Map(Object.entries(restaurant.openingHours));
// console.log(hoursMap);

// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }
// const answer = Number(prompt('Your answer'));
// console.log(answer);

// console.log(question.get(answer === question.get('correct')));

// // Convert map to array
// console.log([...question]);
// console.log(question.entries());
// console.log(question.keys());
// console.log(question.values());

// // 121 String part 1

// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('B737'[1]);

// console.log(airline.length);
// console.log('B737'.length);

// console.log(airline.indexOf('r'));
// console.log(airline.indexOf('T'));

// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('portugal'));

// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// console.log(airline.slice(-3));
// console.log(airline.slice(1, -1));

// const checkMiddleSeat = function (seat) {
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') console.log('You got the middle seat.');
//   else console.log('You got lucky');
// };

// checkMiddleSeat('22B');
// checkMiddleSeat('22A');

// console.log(new String('Jonas'));
// console.log(typeof new String('Jonas'));
// console.log(typeof new String('Jonas').slice(1));

// // 122 string part 2
// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// const passenger = 'jOnaS';

// const passengerLower = passenger.toLowerCase();
// console.log(passengerLower);

// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// const email = 'hello@jonas.io';
// const loginEmail = '    hello@jonas.io \n';

// const lowerEmail = loginEmail.toLowerCase();
// console.log(lowerEmail);

// const trimedEmail = lowerEmail.trim();
// console.log(trimedEmail);

// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);
// console.log(email === normalizedEmail);

// const priceBG = '288,97£';
// const priceUS = priceBG.replace('£', '$').replace(',', '.');
// console.log(priceUS);

// const announcement = 'All passenger come to boarding door 23. Bording door 23';
// console.log(announcement.replace('door', 'gate'));
// console.log(announcement.replaceAll('door', 'gate'));
// console.log(announcement);
// console.log(announcement.replace(/door/g, 'gate'));

// const plane2 = 'Airbus A320neo';
// console.log(plane2.includes('A320'));
// console.log(plane2.includes('Being'));
// console.log(plane2.startsWith('Air'));

// if (plane2.startsWith('Airbus') && plane2.endsWith('neo')) {
//   console.log('Part of the NEW Airbus family');
// }

// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes('knife') || baggage.includes('gun')) {
//     console.log('You are NOT allowed on board');
//   } else {
//     console.log('Welcame on board');
//   }
// };

// checkBaggage(' I have Gun');
// checkBaggage(' I have Knife');
// checkBaggage(' I have gun');
// checkBaggage(' I have knife');
// checkBaggage(' I have camera');

// 123 Srting part 3

console.log('a+very+naice+string'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');
console.log(firstName);
console.log(lastName);

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const nameUpper = [];

  for (const n of names) {
    // nameUpper.push(n[0].toUpperCase() + n.slice(1));
    nameUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(nameUpper.join(' '));
};

capitalizeName('tomasz konieczny anna baran');

const message = 'Go to gate 23!';
console.log(message.padStart(20, '-').padEnd(30, '+'));
console.log('Jonas'.padStart(20, '-').padEnd(30, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(4523451245124512));
console.log(maskCreditCard('4523451245124522'));

const message2 = 'Bad weather...  ';
console.log(message2.repeat(5));
