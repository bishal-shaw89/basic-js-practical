// find all possible combination of sum 15 from an array [2, 6, 0, 9, 7, 3, 1, 4, 1, 10]

function findCombinations(arr, targetSum) {
  const combinations = [];

  function backtrack(currCombination, startIndex, currSum) {
    if (currSum === targetSum) {
      combinations.push(currCombination.slice()); // Add a copy of the combination to the result
      return;
    }

    if (currSum > targetSum || startIndex === arr.length) {
      return;
    }

    for (let i = startIndex; i < arr.length; i++) {
      currCombination.push(arr[i]);
      backtrack(currCombination, i + 1, currSum + arr[i]);
      currCombination.pop();
    }
  }

  backtrack([], 0, 0);
  return combinations;
}

const array = [2, 6, 0, 9, 7, 3, 1, 4, 1, 10];
const target = 15;

const result = findCombinations(array, target);
console.log(result);
