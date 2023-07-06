let arr = [1, 2, 3, 4, 5];

// function max_array(array) {
//     return (Math.max(...array));
// }

// console.log(max_array(arr));

// without using inbuilt function

function max_array(array) {
    let larget = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] > larget) {
            larget = array[i];
        }
    }
    return larget;
}

console.log(max_array(arr));