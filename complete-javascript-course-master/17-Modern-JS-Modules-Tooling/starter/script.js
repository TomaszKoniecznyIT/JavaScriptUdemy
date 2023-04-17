// ///////////////////////////////////////
// //272. Exporting and Importing in ES6 Modules

// // import { addCart, totalPrice as price, qt } from './shoppingCart.js';
// console.log('Importing module');

// // addCart('bread', 5);
// // console.log(price);
// // console.log(qt);

// import * as ShopCart from './shoppingCart.js';
// console.log(ShopCart.qt);
// console.log(ShopCart.totalPrice);

// import add from './shoppingCart.js';
// add('pizza', 2);

// console.log(ShopCart.cart);

// add('bread', 3);

// console.log(ShopCart.cart);

// ///////////////////////////////////////
// //273. Top-Level Await (ES2022)

// // console.log('Start fetching');
// // const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// // const data = await res.json();
// // console.log(data);
// // console.log('Something');

// const getLastPost = async function () {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const data = await res.json();

//   return { title: data[data.length - 1].title, text: data.at(-1).body };
// };

// const lastPost = getLastPost();
// console.log(lastPost);

// // Not very clean
// // lastPost.then(last => console.log(last));

// const lastPost2 = await getLastPost();
// console.log(lastPost2);

// ///////////////////////////////////////
// //274. The Module Pattern

// const ShoppingCart2 = (function () {
//   const cart = [];
//   const shippingCost = 10;
//   const totalPrice = 237;
//   const totalQuantity = 23;

//   const addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(
//       `${quantity} ${product} added to cart (sipping cost is ${shippingCost})`
//     );
//   };

//   const orderStock = function (product, quantity) {
//     console.log(`${quantity} ${product} ordered from supplier`);
//   };

//   return {
//     addToCart,
//     cart,
//     totalPrice,
//     totalQuantity,
//   };
// })();

// ShoppingCart2.addToCart('apple', 4);
// ShoppingCart2.addToCart('pizza', 2);
// console.log(ShoppingCart2);
// console.log(ShoppingCart2.shippingCost);

// ///////////////////////////////////////
// //275. CommonJS Modules
// // Export
// export.addTocart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(
//       `${quantity} ${product} added to cart (sipping cost is ${shippingCost})`
//     );
//   };

//   // Import
//   const { addTocart } = require('./shoppingCart.js');

///////////////////////////////////////
//277. Introduction to NPM

import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};
const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;
console.log(stateClone);

console.log(stateDeepClone);
