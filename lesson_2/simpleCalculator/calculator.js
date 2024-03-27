/**
 * Prompt the user for two numbers and an operator, then calculate and display the result
 */
const rl = require('readline-sync');

const LANGUAGE = 'en';
const MESSAGES = require('./calculator_messages.json')[LANGUAGE];

const formattedPrompt = (message) => console.log(`=> ${message}`);
const validNumber = (numberStr) => !(numberStr.trimStart() === '' || Number.isNaN(Number(numberStr)));

const getValidNumberInput = (prompt) => {
  formattedPrompt(prompt);
  let input = rl.question().replace(/,/, '');
  while (!validNumber(input)) {
    console.log(MESSAGES.invalidNum);
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

console.log(MESSAGES.welcome);

function main() {
  const x = getValidNumberInput(MESSAGES.first);
  const y = getValidNumberInput(MESSAGES.second);

  formattedPrompt(MESSAGES.selectOperation);
  let operation = rl.question();
  while (operationDict[operation] === undefined) {
    console.log(MESSAGES.invalidOption);
    operation = rl.question();
  }

  console.log(operationDict[operation](x, y));
  formattedPrompt(MESSAGES.anotherCalc);
  let repeat = rl.question();
  while (repeat !== 'y' && repeat !== 'n') {
    console.log(MESSAGES.invalidOption);
    repeat = rl.question();
  }
  if (repeat === 'y') main();
}

main();
