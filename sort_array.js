function sort(arr) {
    const len = arr.length;

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            //if (arr[j] < arr[j+1]) { // for desending order
            if (arr[j] > arr[j+1]) { // for ascending order
                const temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }        
    }

    return arr;
}

console.log(sort([1,6,7,2,5,3,4]));
