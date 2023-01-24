'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `${firstName} are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // will change to Steven but only for this block
      // Jonas will still be there
      const firstName = 'Steven';
      const str = `Oh, and you're a millenial ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // there will no longer be access to the str variable
    // console.log(str);
    console.log(millenial);
    // in strict mode the function will not work, but in normal mode it will
    // console.log(add(2, 3));
  }
  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(1991);
// there will no longer be access to the age variable or the printAge function
// printAge();
// console.log(age);
// console.log(millenial);

//  Leson 95
// console.log(me1);
// console.log(job1);
// console.log(year1);

var me1 = 'Jonas';
let job1 = 'teacher';
const year1 = 1991;

// Example
if (!numProd) delShopCart();

var numProd = 10;

function delShopCart() {
  console.log('All products deleted');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x); // true
console.log(y === window.y); // false
console.log(z === window.z); //false

// this

console.log(this); // window

const calcAge2 = function (birthYear2) {
  console.log(2037 - birthYear2);
  console.log(this); // undefined in strict mode
};

calcAge2(1991);

const calcAge3 = birthYear2 => {
  console.log(2037 - birthYear2);
  console.log(this); // window
};

calcAge3(1991);

const jonas2 = {
  year: 1991,
  calcAge4: function () {
    console.log(this); // jonas2
    console.log(2037 - this.year);
  },
};

jonas2.calcAge4();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas2.calcAge4; // passing the function from the jonas2 object to the object
matilda.calcAge();
console.log(matilda);

const f = jonas2.calcAge4;
console.log(f);
// f();

//  98.

// var firstName2 = 'Matilda'; var will create a property (first name) and here we get hey Matilda bo this -> global(window)

console.log('98');
const jonas5 = {
  firstName: 'Jonas',
  year5: 1991,
  calcAge4: function () {
    console.log(this); // jonas2
    console.log(2037 - this.year5);

    // Solution 1
    const self = this; // self or that
    const isMillenial = function () {
      console.log('self --  function() ,     ', self);
      console.log(self.year5 >= 1981 && self.year5 <= 1996);
      // console.log(this.year5 >= 1981 && this.year5 <= 1996);this won't work because this will be undefinite. This can be bypassed by using self.
    };
    isMillenial();

    // Solution 2
    // use the arrow function (=>) because it inherits so here this will be from calcAge4
    const isMillenial2 = () => {
      console.log(this, '=>');
      console.log(this.year5 >= 1981 && this.year5 <= 1996);
    };
    isMillenial2();
  },

  greet: () => console.log(`Hey ${this.firstName}`, this), //after global therefore undefined (=> function) {this is not block code, object declaration only}, this - after global _ window
};
jonas5.greet();
jonas5.calcAge4();

const addExpr = function (a, b) {
  console.log(typeof arguments, arguments.length);
  console.log(arguments);
  return a + b;
};
console.log(addExpr(2, 5));
// with a normal function, it is possible to pass more arguments than declared and it will not give an error, it will now be possible to access these arguments
console.log(addExpr(3, 5, 6, 7));
addExpr(5, 5, 6, 7, 9);

// however, when I give arguments to the arrow function, we can only give the declared number of arguments.

const addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
// addArrow(2, 5, 6); // there will be an error

//  99
console.log('----99----');
let age1 = 30;
let oldAge = age1;
age1 = 31;
console.log(age1);
console.log(oldAge);

const me = {
  firstName: 'Jonas',
  age: 30,
};

const friend = me;
friend.age = 27;
console.log('friend', friend);
console.log('me', me); //me age property will also be changed to 27

// 100

console.log('----100----');

const jesica2 = {
  firstName: 'Jesica',
  lastName: 'Williams',
  age: 27,
  family: ['Alicja', 'Bob'],
};

const jesica3 = Object.assign({}, jesica2); // yes you can copy an object but only 1 level
jesica3.lastName = 'Davis';

console.log(jesica2);
console.log(jesica3);

// now changing the family in jesica 3
jesica3.family.push('Tom');

// We will add Tom to both jesica because the array is already a level 2 object
console.log(jesica2);
console.log(jesica3);
