const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1.
dogs.forEach(function (dogs) {
  dogs.recommendedFood = dogs.weight ** 0.75 * 28;
});
console.log(dogs);

// 2. for all
const sarahDogs = dogs.filter(dog => dog.owners.includes('Sarah'));
console.log(sarahDogs);
sarahDogs.forEach(dog =>
  console.log(
    `Sarah dog eat too ${
      dog.curFood !== dog.recommendedFood && dog.curFood > dog.recommendedFood
        ? 'much!'
        : 'little'
    }`
  )
);

// including 10%
// 3.
const ownersEatTooMuch = dogs
  .filter(dog => dog.recommendedFood * 1.1 - dog.curFood < 0)
  .flatMap(ow => ow.owners);
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter(dog => dog.recommendedFood * 0.9 - dog.curFood > 0)
  .flatMap(ow => ow.owners);
console.log(ownersEatTooLittle);

// 4.
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

// 5.
const eatExactly = dogs.some(dog => dog.recommendedFood === dog.curFood);
console.log(eatExactly);

// 6.
const eatOk = dog =>
  dog.recommendedFood * 0.9 < dog.curFood &&
  dog.recommendedFood * 1.1 > dog.curFood;
const eatOkAny = dogs.some(eatOk);
console.log(eatOkAny);

// 7.
const arrayEatOk = dogs.filter(eatOk);
console.log(arrayEatOk);

// 8.
const sortedDogs = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(sortedDogs);

// Jonas
// // 1.
// dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));

// // 2.
// const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
// console.log(dogSarah);
// console.log(
//   `Sarah's dog is eating too ${
//     dogSarah.curFood > dogSarah.recFood ? 'much' : 'little'
//   } `
// );

// // 3.
// const ownersEatTooMuch = dogs
//   .filter(dog => dog.curFood > dog.recFood)
//   .flatMap(dog => dog.owners);
// // .flat();
// console.log(ownersEatTooMuch);

// const ownersEatTooLittle = dogs
//   .filter(dog => dog.curFood < dog.recFood)
//   .flatMap(dog => dog.owners);
// console.log(ownersEatTooLittle);

// // 4.
// // "Matilda and Alice and Bob's dogs eat too much!"
// //  "Sarah and John and Michael's dogs eat too little!"
// console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
// console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

// // 5.
// console.log(dogs.some(dog => dog.curFood === dog.recFood));

// // 6.
// // current > (recommended * 0.90) && current < (recommended * 1.10)
// const checkEatingOkay = dog =>
//   dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;

// console.log(dogs.some(checkEatingOkay));

// // 7.
// console.log(dogs.filter(checkEatingOkay));

// // 8.
// // sort it by recommended food portion in an ascending order [1,2,3]
// const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
// console.log(dogsSorted);
