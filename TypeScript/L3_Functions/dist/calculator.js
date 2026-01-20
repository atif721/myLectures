"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(a, b) {
    return a + b;
}
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const division = (a, b) => {
    return b === 0 ? "Cannot divide by zero" : (a / b);
};
function power(base, exponent = 2) {
    return Math.pow(base, exponent);
}
function Calculate(operation, a, b = 1) {
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
//# sourceMappingURL=calculator.js.map