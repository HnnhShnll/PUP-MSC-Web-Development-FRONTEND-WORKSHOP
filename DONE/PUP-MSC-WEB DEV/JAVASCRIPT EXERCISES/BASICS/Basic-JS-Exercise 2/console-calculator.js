function calc(num1, num2, sign) {
  switch (sign) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num2 !== 0 ? num1 / num2 : "Error: Division by zero";
    case "%":
      return num2 !== 0 ? num1 % num2 : "Error: Modulo by zero";
    default:
      return "Error: Invalid operator";
  }
}

let calculate = true;

while (calculate) {
  let operator = prompt("Choose an operation (+, -, *, /, %):");
  let num1 = parseFloat(prompt("Enter the first number:"));
  let num2 = parseFloat(prompt("Enter the second number:"));

  if (isNaN(num1) || isNaN(num2)) {
    alert("Error: Please enter valid numbers!");
    console.error("Invalid input: Non-numeric value entered.");
  } else if (!["+", "-", "*", "/", "%"].includes(operator)) {
    alert("Error: Invalid operator! Please enter one of +, -, *, /, %.");
    console.error("Invalid operator entered.");
  } else {
    let result = calc(num1, num2, operator);
    alert(`Result: ${num1} ${operator} ${num2} = ${result}`);
    console.log(`Calculation: ${num1} ${operator} ${num2} = ${result}`);
  }

  calculate = confirm("Do you want to perform another calculation?");
}
