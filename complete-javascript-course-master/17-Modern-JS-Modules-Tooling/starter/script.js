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
