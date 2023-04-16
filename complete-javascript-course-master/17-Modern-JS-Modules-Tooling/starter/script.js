///////////////////////////////////////
//272. Exporting and Importing in ES6 Modules

// import { addCart, totalPrice as price, qt } from './shoppingCart.js';
console.log('Importing module');

// addCart('bread', 5);
// console.log(price);
// console.log(qt);

import * as ShopCart from './shoppingCart.js';
console.log(ShopCart.qt);
console.log(ShopCart.totalPrice);

import add from './shoppingCart.js';
add('pizza', 2);

console.log(ShopCart.cart);

add('bread', 3);

console.log(ShopCart.cart);

///////////////////////////////////////
//273. Top-Level Await (ES2022)

// console.log('Start fetching');
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);
// console.log('Something');

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();
console.log(lastPost);

// Not very clean
// lastPost.then(last => console.log(last));

const lastPost2 = await getLastPost();
console.log(lastPost2);
