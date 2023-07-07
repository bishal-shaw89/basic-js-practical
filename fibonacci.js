// Implement a function that returns the Fibonacci sequence up to a given number of terms.
// eg: [0, 1, 1, 2, 3, 5, 8, 13] with 8 terms.

function generateFibonacciSequence(numTerms) {
  if (numTerms <= 0) {
    return [];
  }

  const fibonacciSequence = [0, 1];

  while (fibonacciSequence.length < numTerms) {
    const prevNum1 = fibonacciSequence[fibonacciSequence.length - 1];
    const prevNum2 = fibonacciSequence[fibonacciSequence.length - 2];
    fibonacciSequence.push(prevNum1 + prevNum2);
  }
  return fibonacciSequence;
}

console.log(generateFibonacciSequence(10));
