/**
 * Prompt the user for two numbers and an operator, then calculate and display the result
 */
const rl = require('readline-sync');

const formattedPrompt = (message) => console.log(`=> ${message}`);
const validNumber = (numberStr) => !(numberStr.trimStart() === '' || Number.isNaN(Number(numberStr)));

const getValidNumberInput = (prompt) => {
  formattedPrompt(prompt);
  let input = rl.question().replace(/,/, '');
  while (!validNumber(input)) {
    console.log('Not a valid number; try again');
    input = rl.question().replace(/,/, '');
  }
  return Number(input);
};

const operationDict = {
  1: (x, y) => x + y,
  2: (x, y) => x - y,
  3: (x, y) => x * y,
  4: (x, y) => x / y,
};

console.log('Welcome to Calculator!');

function main() {
  const x = getValidNumberInput('First number:');
  const y = getValidNumberInput('Second number:');

  formattedPrompt('What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide:');
  let operation = rl.question();
  while (operationDict[operation] === undefined) {
    console.log('Not a valid option; try again');
    operation = rl.question();
  }

  console.log(operationDict[operation](x, y));
  formattedPrompt('Perform another calculation? y / n');
  let repeat = rl.question();
  while (repeat !== 'y' && repeat !== 'n') {
    console.log('Not a valid option; type y or n');
    repeat = rl.question();
  }
  if (repeat === 'y') main();
}

main();
