// Write a function that removes duplicate elements from an array.

function remove_duplicate(array) {
  //   const unique_array = [];

  //   for (const element of array) {
  //     if (!unique_array.includes(element)) {
  //       unique_array.push(element);
  //     }
  //   }

  // another method
  const unique_array = [...new Set(array)]; // set is a collection of unique values.

  return unique_array;
}

//const arr = [1, 1, 2, 3, 5, 7, 7, 9];
//const arr = ["a", "a", "b", "c", "c", "d"];
const arr = ["a", "a", 1, 1, 2, 3, 5, 7, 7, 9, "b", "c", "c", "d"];

console.log(remove_duplicate(arr));
