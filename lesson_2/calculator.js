/**
 * Prompt the user for two numbers and an operator, then calculate and display the result
 */
const rl = require('readline-sync');

console.log('Welcome to Calculator!');
const x = parseFloat(rl.question("first number: "));
const y = parseFloat(rl.question("second number: "));
const operation = parseInt(rl.question("What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide: "));

if (Number.isNaN(x) || Number.isNaN(y)) {
  console.log(`one of the numbers is invalid`);
  return;
}

const operationDict = {
  1: (x, y) => x + y,
  2: (x, y) => x - y,
  3: (x, y) => x * y,
  4: (x, y) => x / y,
}

if (!(operation in operationDict)) {
  console.log('invalid operator');
  return;
}
console.log(operationDict[operation](x, y));