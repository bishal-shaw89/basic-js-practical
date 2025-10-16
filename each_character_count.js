function countChar(str) {
    const charCount = {};

    for (const char of str.toLowerCase()) {
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }

    return charCount;
}

console.log(countChar("Hello Worldh"));