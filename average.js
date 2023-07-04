const arr = [1, 2, 3, 4, 5];

let sum = 0;

function average(array) {
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / array.length;
}

console.log(average(arr));
