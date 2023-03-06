const checkDogs = function (arr1, arr2) {
  arrAll = arr1.slice(1, -2).concat(arr2);
  arrAll.forEach(function (dog, i) {
    dog > 3
      ? console.log(`Dog number ${i + 1} is an adult and is ${dog} years old`)
      : console.log(`Dog number ${i + 1} is still a pupy`);
  });
};

// Jonas
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

const checkDogs2 = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);
  // dogsJulia.slice(1, 3);
  const dogs = dogsJuliaCorrected.concat(dogsKate);
  console.log(dogs);

  dogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy 🐶`);
    }
  });
};

checkDogs2([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
