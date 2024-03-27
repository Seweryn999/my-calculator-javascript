const prompt = require("prompt-sync")();

const firstValue = () => {
  const firstNumber = prompt("Enter first number: ");
  const parseFirstNumber = parseFloat(firstNumber);

  if (isNaN(parseFirstNumber)) {
    console.log("Given value is not a number, try again: ");
    return firstValue();
  }
  return parseFirstNumber;
};

const mathematicalSymbol = () => {
  const mathSymbol = prompt("Enter a math symbol out of (+, -, *, /):  ");

  if (
    mathSymbol != "*" &&
    mathSymbol != "+" &&
    mathSymbol != "-" &&
    mathSymbol != "/"
  ) {
    console.log("Given value is not one of (+, -, *, /) symbols.");
    return mathematicalSymbol();
  }
  return mathSymbol;
};

const secondValue = () => {
  const secondNumber = prompt("Enter second number: ");
  const parseSecondNumber = parseFloat(secondNumber);

  if (isNaN(parseSecondNumber)) {
    console.log("Given value is not a number, try again: ");
    return secondValue();
  }
  return parseSecondNumber;
};

const operations = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => {
    if (b === 0) {
      console.log("Cannot divide by zero");
      return;
    }
    return a / b;
  },
};

const calculateOutcome = (firstNumber, mathSymbol, secondNumber) => {
  if (operations[mathSymbol]) {
    return operations[mathSymbol](firstNumber, secondNumber);
  } else {
    console.log("Invalid operation");
    return NaN;
  }
};

const firstNumber = firstValue();
const mathSymbol = mathematicalSymbol();
const secondNumber = secondValue();

const result = calculateOutcome(firstNumber, mathSymbol, secondNumber);
if (!isNaN(result)) {
  console.log("Result:", result);
}
