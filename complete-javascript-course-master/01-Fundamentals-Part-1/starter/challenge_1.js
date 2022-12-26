// const weight_Mark = 78;
// const weight_John = 92;
// const tall_Mark = 1.69;
// const tall_John = 1.95;
const weight_Mark = 95;
const weight_John = 85;
const tall_Mark = 1.88;
const tall_John = 1.76;
const BMI_John = weight_John / tall_John ** 2;
const BMI_Mark = weight_Mark / tall_Mark ** 2;
const markHigherBMI = BMI_Mark > BMI_John


console.log(markHigherBMI);
console.log(BMI_John);
console.log(BMI_Mark);