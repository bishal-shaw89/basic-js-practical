// Implement a function that checks if two strings are anagrams (contain the same characters in a
// different order).

function areAnagrams(str1, str2) {
  if (str1.length != str2.length) {
    return false;
  }

  const char1Count = getCharCount(str1.toLowerCase());
  const char2Count = getCharCount(str2.toLowerCase());

  for (const char in char1Count) {
    if (char1Count[char] != char2Count[char]) {
      return false;
    }
  }

  return true;
}

function getCharCount(str) {
  let charCount = {};

  for (let char of str) {
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }
  return charCount;
}

console.log(areAnagrams("lisTen", "silent"));
