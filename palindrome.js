// Implement a function that checks if a given string is a palindrome (reads the same forwards and backwards).

function isPalindrome(str) {
  //const sanitizeStr = str.toLowerCase().replace(/[a-z0-9]/g, "");
  if (typeof str === "string") {
    const sanitizeStr = str.toLowerCase();
    const reversedStr = sanitizeStr.split("").reverse().join("");

    return sanitizeStr === reversedStr;
  }
  return false;
}

console.log(isPalindrome("12321"));
