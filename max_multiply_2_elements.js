const arr = [1, 2, 3, 4, 5];
let maxResult = 0;

for (let i = 0; i < arr.length; i++) {
  //console.log("i ->", arr[i]);
  for (let j = i + 1; j < arr.length; j++) {
    //console.log("j ->", arr[j]);
    const product = arr[i] * arr[j];
    //console.log("product ->", product);
    maxResult = Math.max(maxResult, product);
  }
}

console.log("The maximum multiple result of two elements is:", maxResult);
