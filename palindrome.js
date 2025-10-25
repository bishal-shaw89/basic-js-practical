function isPalindrome(word) {
    const sanitizedStr = word.toLowerCase().replace('/[^a-z0-9]/g','');
    const reverseStr = sanitizedStr.split('').reverse().join('');

    return sanitizedStr === reverseStr;
}

console.log(isPalindrome("What"));
console.log(isPalindrome("racecar"));
