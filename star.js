// row = 5
 
// *
// $ *
// $ * $
// * $ * $
// * $ * $ *

// Get user input for number of rows
let row = 6;

// Initialize starting character
let startChar = '*';

for (let i = 1; i <= row; i++) {
  let line = '';
  let currentChar = startChar;

  // Generate pattern for each row
  for (let j = 1; j <= i; j++) {
    line += currentChar + ' ';
    currentChar = (currentChar === '*') ? '$' : '*';
  }

  console.log(line.trim());

  // Decide next line's starting character (based on last printed char)
  startChar = (line.trim().endsWith('*')) ? '$' : '*';
}
