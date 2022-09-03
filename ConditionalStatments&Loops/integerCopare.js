const firstInteger = prompt('Enter the first integer: ');
const secondInteger = prompt('Enter the second integer: ');

const compareTwoIntegers = (first, second) => Math.max(...[first, second]);
console.log(compareTwoIntegers(firstInteger, secondInteger));
