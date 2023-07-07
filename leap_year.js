// Create a function that determines if a given year is a leap year.

function isLeapYear(year) {
  if (year % 400 !== 0) {
    return false;
  } else if (year % 100 !== 0) {
    return true;
  } else if (year % 4 !== 0) {
    return false;
  } else {
    return true;
  }
}

console.log(isLeapYear(2000));
