
let row = 5;
let startChar = '*';

for (let i = 1; i <= row; i++) {
    let row = "";
    let currentChar = startChar;
    for (let j = 1; j <= i; j++) {
        row += currentChar;
        currentChar = (currentChar === "*") ? '$' : '*';
    }
    console.log(row);

    startChar = (row.endsWith('*')) ? '$' : '*';
}