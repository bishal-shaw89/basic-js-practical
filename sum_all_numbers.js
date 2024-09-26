// Write a function that takes an array of numbers as input and returns the sum of all the numbers.

const number = [1, 2, 3, 4, 5];
let sum = 0;

function array_sum(array) {
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

console.log(array_sum(number));
