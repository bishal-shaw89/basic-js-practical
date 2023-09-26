// Write a function that takes two arrays of numbers as input and returns a new array that contains only
// the unique elements from both arrays.

const arr1 = [1, 2, 3];
const arr2 = [2, 3, 4];

let new_array = [];

function unique_array(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] != arr2[j]) {
        new_array.push(arr1[i]);
      }
    }
  }
  return new_array;
}

console.log(unique_array(arr1, arr2));
