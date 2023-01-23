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
