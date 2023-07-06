let text = "This is abcdefgh a test message";

const array = text.split(" ");

function longest_word(array) {
    let largest = array[0];

    for (let i = 0; i < array.length; i++) {
        if (array[i].length > largest.length) {
            largest = array[i];
        }
    }

    return largest;
}

console.log(longest_word(array));