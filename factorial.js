// Implement a function that calculates the factorial of a given number.
// eg: 5! = 5 * 4 * 3 * 2 * 1 = 120

function factorial(number) {
  if (number === 1 || number === 0) {
    return 1;
  }

  let factorialNumber = 1;

  for (let i = 2; i <= number; i++) {
    factorialNumber *= i;
  }
  return factorialNumber;
}

console.log(factorial(5));
