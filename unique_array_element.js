function getUniqueElements(arr1, arr2) {
    const uniqueElements = new Set([...arr1, ...arr2]);

    return Array.from(uniqueElements);
}

const arr1 = [1,2,3,4];
const arr2 = [3,4,5,6];
const result = getUniqueElements(arr1, arr2);

console.log(result);
