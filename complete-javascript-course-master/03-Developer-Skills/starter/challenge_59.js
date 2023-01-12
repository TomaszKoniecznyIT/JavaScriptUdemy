"use strict";

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, "error", 14, 9, 5];

// error elimination
function errorElimination(array) {
  let arrayWithoutError = [];
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] !== "string") arrayWithoutError.push(array[i]);
  }
  return arrayWithoutError;
}

// max and min value of the array
function amplitudeArray(array) {
  let min = array[0];
  let max = array[0];
  for (let i = 0; i < array.length; i++) {
    if (min > array[i]) min = array[i];
    if (max < array[i]) max = array[i];
  }
  return max - min;
}

const amplitude = amplitudeArray(errorElimination(temperatures));
console.log(amplitude);
