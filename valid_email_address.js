function validEmailAddress(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

const email1 = 'john.doe@example.com';
const email2 = 'invalid.email@domain';
const result1 = isValidEmail(email1);
const result2 = isValidEmail(email2);

console.log(result1); // Output: true
console.log(result2); // Output: false