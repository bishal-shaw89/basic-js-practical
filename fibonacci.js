function generateFibonacciSequence(terms) {
    if (terms <= 0) {
        return [];
    }

    const fibonacciSequence = [0,1];

    while (fibonacciSequence.length < terms) {
        const prevNum1 = fibonacciSequence[fibonacciSequence.length - 1];
        const prevNum2 = fibonacciSequence[fibonacciSequence.length - 2];
        const nextNum = prevNum1 + prevNum2;
        fibonacciSequence.push(nextNum);
    }

    return fibonacciSequence;
}

console.log(generateFibonacciSequence(8));
