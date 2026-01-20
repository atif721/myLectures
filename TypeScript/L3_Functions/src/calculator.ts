function add(a: number, b: number): number {
  return a + b;
}

const subtract = (a: number, b: number): number => a - b;
const multiply = (a: number, b: number): number => a * b;
const division = (a: number, b: number): any => {
  return b === 0 ? "Cannot divide by zero" : (a / b);
};


function power(base: number, exponent: number = 2): number {
  return Math.pow(base, exponent);
}

function Calculate(operation: string, a: number, b: number = 1): any {
  switch (operation) {
    case "+":
      return add(a, b);
      break;
    case "-":
      return subtract(a, b);
      break;
    case "*":
      return multiply(a, b);
      break;
    case "/":
      return division(a, b);
      break;
    case "**":
      return power(a, b);
      break;
    default:
      return "Invalid Error";
  }
}

console.log("Add : ", Calculate("+", 3, 1));
console.log("Subtract : ", Calculate("-", 13, 11));
console.log("Multiply : ", Calculate("*", 3, 12));
console.log("Division : ", Calculate("/", 33, 11));
console.log("Power : ", Calculate("**", 3, 3));
console.log("Unwanted : ", Calculate("$", 33, 11));