// Create a function that capitalizes the first letter of each word in a sentence.

// function capitalizeFirstLetter(str) {
//   const strArray = str.split(" ");

//   const camelCase = [];

//   for (const element of strArray) {
//     let firstLetter = element.charAt(0).toUpperCase();
//     let restWord = element.slice(1).toLowerCase();
//     camelCase.push(firstLetter + restWord);
//   }

//   return camelCase.join(" ");
// }

// another method

function capitalizeFirstLetter(str) {
  const strArray = str.split(" ");

  const camelCase = strArray.map((word) => {
    const firstLetter = word.charAt(0).toUpperCase();
    const restWord = word.slice(1).toLowerCase();
    return firstLetter + restWord;
  });

  return camelCase.join(" ");
}

const text = "this is a test message";
console.log(capitalizeFirstLetter(text));
