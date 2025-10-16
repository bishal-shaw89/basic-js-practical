function largestElement(arr) {
    let largest = arr[0];

    for (const element of arr) {
        if (largest < element) {
            largest = element;
        }
    }

    return largest;
}

console.log(largestElement([5, 8, 2, 1, 10, 3]));
