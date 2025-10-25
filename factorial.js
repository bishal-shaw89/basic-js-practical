function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }

    let factorial = 1;

    for (let i = 2; i <= num; i++) {
        factorial *= i;
    }

    return factorial;
}

console.log(factorial(6));
