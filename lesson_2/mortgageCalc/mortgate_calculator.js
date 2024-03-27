/**
 * Calculates a mortgage based on the loan principal, APR (e.g. 5%), and duration in years
 */

const { question } = require('readline-sync');

const isValidNumber = (numberStr) => numberStr.trim() !== '' 
  && !Number.isNaN(Number(numberStr)) 
  && Number(numberStr) > 0;

function getValidInput(prompt) {
  console.log(prompt);
  let rawInput = question().replace(/,/, '');
  while (!isValidNumber(rawInput)) {
    console.log(`${rawInput} is not a valid input; try again`);
    rawInput = question().replace(/,/, '');
  }
  return Number(rawInput);
}

function formatToDollars(n) {
  // round n to 2 digits
  const rounded = Math.round(n * 100) / 100;
  // pad to ensure 2 decimal places
  const stringParts = String(rounded).split('.');
  if (stringParts.length === 1) {
    stringParts[1] = '00';
  } else {
    const roundedDecimals = Math.round(stringParts[1] * 100) / 100;
    stringParts[1] = String(roundedDecimals).padEnd(2, '0');
  }
  // convert to string and add a dollar sign in front
  const joined = stringParts.join('.');
  if (!isValidNumber(joined)) return 'Invalid output';
  return `$${joined}`;
}

console.log('Welcome to Mortgage Calculator!');
const principal = getValidInput('What\'s the loan principal?\n');
const annualInterestRate = getValidInput('What\'s the loan interest percentage?\n') / 100.0;
const durationYears = getValidInput('What\'s the loan duration in years?\n');

const monthlyInterestRate = annualInterestRate / 12.0;
const durationMonths = durationYears / 12.0;
const interestFactor = 1 - ((1 + monthlyInterestRate) ** (-durationMonths));
let monthlyPaymentRaw = 0;
if (monthlyInterestRate > 0) monthlyPaymentRaw = principal * (monthlyInterestRate / interestFactor);

console.log(formatToDollars(monthlyPaymentRaw));
