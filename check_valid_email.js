// Write a function that checks if a given string is a valid email address.

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

console.log(isValidEmail("bishal@gmail.com"));
