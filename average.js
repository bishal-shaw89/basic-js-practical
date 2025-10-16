function findAverage(arr) {
    let sum = 0;

    for (const element of arr) {
        sum += element;
    }

    let avg = sum/arr.length;

    return avg;
}

const numbers = [1, 2, 3, 4, 5];
const result = findAverage(numbers);

console.log(result);