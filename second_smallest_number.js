// Create a function that finds the second smallest element in an array of numbers.

// function secondSmallest(array) {
//   const sort = array.sort((a, b) => {
//     return a - b;
//   });
//   return sort[1];
// }

// another method

function secondSmallest(array) {
  if (array.length < 2) {
    return "Atleast should contain 2 numbers";
  }

  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (const number of array) {
    if (number < smallest) {
      secondSmallest = smallest;
      smallest = number;
    } else if (number < secondSmallest && number !== smallest) {
      secondSmallest = number;
    }
  }

  if (secondSmallest === Infinity) {
    return "There is no second smallest number";
  }

  return secondSmallest;
}

const arr = [5, 4, 3, 2, 1];

console.log(secondSmallest(arr));
