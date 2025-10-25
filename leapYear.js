function isLeapYear(year) {
    if (year%4 !== 0) {
        return false;
    } else if(year%100 !== 0) {
        return true;
    } else if(year%400 !== 0) {
        return false;
    } else {
        return true;
    }
}

const year1 = 2020;
const year2 = 1900;
const year3 = 2000;
const result1 = isLeapYear(year1);
const result2 = isLeapYear(year2);
const result3 = isLeapYear(year3);

console.log(result1); // Output: true
console.log(result2); // Output: false
console.log(result3); // Output: true