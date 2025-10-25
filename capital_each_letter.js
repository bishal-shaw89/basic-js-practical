function capLetter(sentence) {
    let words = sentence.split(' ');
    let capLetter = "";
    for (const element of words) {
        let char = element.split('');
        char[0] = char[0].toUpperCase();
        let word = char.join('');
        capLetter += word+" ";
    }
    
    return capLetter.trim();
}

console.log(capLetter('my name is bishal'));
