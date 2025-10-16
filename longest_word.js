function longestWord(sentence) {
    const words = sentence.split(' ');
    let longestWord = '';

    for (const word of words) {
        if (longestWord.length < word.length) {
            longestWord = word;
        }
    }

    return longestWord;
}

console.log(longestWord("The quick brown fox jumped over the lazy dog"));
