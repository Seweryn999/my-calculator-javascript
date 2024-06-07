const operations = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => {
    if (b === 0) {
      alert("Cannot divide by zero");
      return null;
    }
    return a / b;
  },
};

function appendToDisplay(value) {
  const display = document.getElementById("display");
  display.value += value;
}

function clearDisplay() {
  const display = document.getElementById("display");
  display.value = "";
}

function calculate() {
  const display = document.getElementById("display");
  const expression = display.value;

  try {
    const result = evaluateExpression(expression);
    if (result !== null) {
      display.value = result;
    }
  } catch (error) {
    alert("Invalid expression");
    clearDisplay();
  }
}

function evaluateExpression(expression) {
  const operators = Object.keys(operations);
  let operatorFound = null;

  for (let operator of operators) {
    if (expression.includes(operator)) {
      operatorFound = operator;
      break;
    }
  }

  if (operatorFound) {
    const [firstPart, secondPart] = expression
      .split(operatorFound)
      .map((part) => part.trim());
    const firstNumber = parseFloat(firstPart);
    const secondNumber = parseFloat(secondPart);

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
      throw new Error("Invalid number");
    }

    return operations[operatorFound](firstNumber, secondNumber);
  } else {
    throw new Error("Operator not found");
  }
}
