function arraySum(arr) {
    let sum = 0;

    for (const element of arr) {
        if (Array.isArray(element)) {
            sum += arraySum(...element);
        } else {
            sum += element;
        }
    }

    return sum;
}

console.log(arraySum([1,2,3,4,5]));
