let str = "Hello World!";

let charCount = {};

function countCharacters(text) {
  for (const value of text) {
    console.log("value ->", value);
    console.log("charCount['l'] ->", charCount["l"]);
    // if we pass a character in array format for object it will show count of that element
    // for e.g: if we pass charCount["l"] then count for 'l' will show how many times it has occured in string.
    if (charCount[value]) {
      charCount[value]++;
    } else {
      charCount[value] = 1;
    }
  }

  return charCount;
}

console.log(countCharacters(str));
