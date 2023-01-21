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
