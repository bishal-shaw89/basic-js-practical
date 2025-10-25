function removeDuplicate(arr) {
    let tempArr = [];

    for (const element of arr) {
        if (!tempArr.includes(element)) {
            tempArr.push(element);
        }
    }

    return tempArr;

    // using inbuild function
    // const uniqueArray = [...new Set(arr)];
    // return uniqueArray;
}

console.log(removeDuplicate([1,2,2,3,3,4,5,6,6,7]));
