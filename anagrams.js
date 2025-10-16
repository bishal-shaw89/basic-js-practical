// Implement a function that checks if two strings are anagrams (contain the same characters in a different order).

function areAnagrams(str1, str2) {
    if (str1.length !== str2.length) {
        return false;   
    }

    const charCount1 = getCharCount(str1);
    const charCount2 = getCharCount(str2);

    for (const char of charCount1) {
        if (charCount1[char] !== charCount2[char]) {
            return false;
        }
    }

    return true;
}

function getCharCount(str) {
    const charCount = [];

    for (const char of str) {
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }

    return charCount;
}

const string1 = 'listen';
const string2 = 'silent';
const result = areAnagrams(string1, string2);

console.log(result);