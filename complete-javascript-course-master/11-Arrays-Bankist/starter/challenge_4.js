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
