// Write a function that flattens a nested array into a single-level array.

const nestedArray = [1, [2, 3, [4, 5]], 6, [7]];

function flattenArray(array) {
  const flatten = [];
  array.forEach((element) => {
    if (Array.isArray(element)) {
      flatten.push(...flattenArray(element));
    } else {
      flatten.push(element);
    }
  });

  return flatten;
}

console.log(flattenArray(nestedArray));
