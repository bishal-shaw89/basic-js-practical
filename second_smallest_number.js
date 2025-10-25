function secondSmallest(arr) {
    if (arr.length < 2) {
        return "Array should contain atleast 2 values";
    }
    let smallest = arr[0];
    let secondSmallest = arr[1];

    for (const element of arr) {
        if (element < smallest) {
            secondSmallest = smallest;
            smallest = element;
        }
    }

    return secondSmallest;
}

console.log(secondSmallest([5, 8, 2, 1, 10, 3]));
