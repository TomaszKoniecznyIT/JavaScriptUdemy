const test_data_1 = [5, 2, 4, 1, 15, 8, 3];
const test_data_2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = function (ages) {
  const humanAge = ages.map(age => (age <= 2 ? age * 2 : 16 + age * 4));
  console.log(`human age :${humanAge}`);
  const humanAgeMin18 = humanAge.filter(age => age >= 18);
  console.log(`human age > 18 :${humanAgeMin18}`);
  const avg =
    humanAgeMin18.reduce((acc, age) => acc + age, 0) / humanAgeMin18.length;
  return avg;
};

console.log(calcAverageHumanAge(test_data_1));

const avg = function (ages) {
  const humanAge = ages
    .map(age => (age <= 2 ? age * 2 : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, _, arry) => acc + age / arry.length, 0);
  return humanAge;
};
console.log(avg(test_data_2));
console.log(avg(test_data_1));

// => function
const avg2 = ages =>
  ages
    .map(age => (age <= 2 ? age * 2 : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, _, arry) => acc + age / arry.length, 0);

console.log(avg2(test_data_2));
console.log(avg2(test_data_1));
