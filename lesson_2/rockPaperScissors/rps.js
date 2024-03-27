/**
 * The user makes a choice.
 * The computer makes a choice.
 * The winner is displayed.
 */

const { question } = require('readline-sync');

const VALID_OPTIONS = ['rock', 'paper', 'scissors'];
const prompt = (message) => console.log(`=> ${message}`);

function getSelections() {
  const optionStrings = VALID_OPTIONS.map((option, index) => `(${index + 1}) for ${option}`);
  optionStrings[optionStrings.length - 1] = `or ${optionStrings[optionStrings.length - 1]}`;
  const optionsPrompt = `select ${optionStrings.join(', ')}`;
  prompt(optionsPrompt);

  let userInput = parseInt(question(), 10) - 1;
  while (VALID_OPTIONS[userInput] === undefined) {
    prompt(`selection "${userInput}" is invalid`);
    userInput = parseInt(question(), 10) - 1;
  }

  const computerInput = Math.floor(Math.random() * VALID_OPTIONS.length);
  return [VALID_OPTIONS[userInput], VALID_OPTIONS[computerInput]];
}

function getWinner(userChoice, computerChoice) {
  const selections = [userChoice, computerChoice].join(', ');
  const outcomes = {
    'rock, paper': 'computer',
    'rock, scissors': 'user',
    'paper, rock': 'user',
    'paper, scissors': 'computer',
    'scissors, rock': 'computer',
    'scissors, paper': 'user',
  };
  return outcomes[selections] ?? 'draw';
}

const [userSelection, computerSelection] = getSelections();
const winner = getWinner(userSelection, computerSelection);

console.log(`user selected ${userSelection}; computer selected ${computerSelection}`);
const resolution = winner === 'draw' ? 'draw' : `${winner} won!`;
console.log(resolution);
