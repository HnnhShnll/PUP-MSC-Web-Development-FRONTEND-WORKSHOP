const display = document.getElementById("calc-screen");
const clearBtn = document.getElementById("clearBtn");
const signBtn = document.getElementById("signBtn");
const percentBtn = document.getElementById("percentBtn");
const divideBtn = document.getElementById("divideBtn");
const multiplyBtn = document.getElementById("multiplyBtn");
const subtractBtn = document.getElementById("subtractBtn");
const addBtn = document.getElementById("addBtn");
const deleteBtn = document.getElementById("deleteBtn");
const decimalBtn = document.getElementById("decimalBtn");
const equalsBtn = document.getElementById("equalsBtn");
const numberBtns = document.querySelectorAll(".numberKeys");

let currentInput = "0";
let previousInput = "";
let operator = "";
let result = null;
let lastInputWasOperator = false;

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Math Error";
  }
  return a / b;
}

function percentage(a) {
  return a / 100;
}

function toggleSign(a) {
  return a * -1;
}

function operate(num1, num2, operator) {
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "×":
      return multiply(num1, num2);
    case "÷":
      return divide(num1, num2);
    default:
      return num2;
  }
}

function formatResult(result) {
  return result.toFixed(8).replace(/\.?0+$/, "");
}

function updateDisplay(value) {
  display.textContent = value;
}

function handleNumberClick(event) {
  const number = event.target.textContent;
  if (currentInput === "0") {
    currentInput = number;
  } else {
    currentInput += number;
  }
  lastInputWasOperator = false;
  updateDisplay(currentInput);
}

function handleOperatorClick(event) {
  if (lastInputWasOperator) {
    return;
  }

  if (previousInput === "") {
    previousInput = currentInput;
    currentInput = "0";
    operator = event.target.textContent;
  } else {
    result = operate(
      parseFloat(previousInput),
      parseFloat(currentInput),
      operator
    );
    if (result === "Math Error") {
      updateDisplay(result);
      return;
    }
    previousInput = formatResult(result).toString();
    currentInput = "0";
    operator = event.target.textContent;
    updateDisplay(previousInput);
  }

  lastInputWasOperator = true;
}

function handleEqualsClick() {
  if (operator && previousInput !== "") {
    result = operate(
      parseFloat(previousInput),
      parseFloat(currentInput),
      operator
    );
    if (result === "Math Error") {
      updateDisplay(result);
      return;
    }
    currentInput = formatResult(result).toString();
    updateDisplay(currentInput);
    previousInput = "";
    operator = "";
    lastInputWasOperator = false;
  }
}

function handleClearClick() {
  currentInput = "0";
  previousInput = "";
  operator = "";
  result = null;
  lastInputWasOperator = false;
  updateDisplay(currentInput);
}

function handleDeleteClick() {
  if (currentInput.length > 1) {
    currentInput = currentInput.slice(0, -1);
  } else {
    currentInput = "0";
  }
  updateDisplay(currentInput);
}

function handleDecimalClick() {
  if (!currentInput.includes(".")) {
    currentInput += ".";
    updateDisplay(currentInput);
  }
}

function handlePercentClick() {
  currentInput = formatResult(percentage(parseFloat(currentInput))).toString();
  updateDisplay(currentInput);
}

function handleSignClick() {
  currentInput = formatResult(toggleSign(parseFloat(currentInput))).toString();
  updateDisplay(currentInput);
}
function handleKeyboardInput(event) {
  const key = event.key;
  if (key >= "0" && key <= "9") {
    currentInput = currentInput === "0" ? key : currentInput + key;
    lastInputWasOperator = false;
    updateDisplay(currentInput);
  } else if (key === "+" || key === "-" || key === "*" || key === "/") {
    handleOperatorClick({
      target: { textContent: key === "*" ? "×" : key === "/" ? "÷" : key },
    });
  } else if (key === "Enter" || key === "=") {
    handleEqualsClick();
  } else if (key === "Backspace") {
    handleDeleteClick();
  } else if (key === ".") {
    handleDecimalClick();
  } else if (key === "%") {
    handlePercentClick();
  } else if (key === "+-") {
    handleSignClick();
  }
}

numberBtns.forEach((button) => {
  button.addEventListener("click", handleNumberClick);
});

clearBtn.addEventListener("click", handleClearClick);
deleteBtn.addEventListener("click", handleDeleteClick);
decimalBtn.addEventListener("click", handleDecimalClick);
equalsBtn.addEventListener("click", handleEqualsClick);

divideBtn.addEventListener("click", handleOperatorClick);
multiplyBtn.addEventListener("click", handleOperatorClick);
subtractBtn.addEventListener("click", handleOperatorClick);
addBtn.addEventListener("click", handleOperatorClick);

percentBtn.addEventListener("click", handlePercentClick);
signBtn.addEventListener("click", handleSignClick);

document.addEventListener("keydown", handleKeyboardInput);
