function flattenArray(arr) {
    const flattend = [];

    for (const element of arr) {
        if (Array.isArray(element)) {
            flattend.push(...flattenArray(element));
        }else{
            flattend.push(element);
        }
    }
    return flattend;
}

let arr = [1,2,3,[4,5],6];
console.log(flattenArray(arr));
