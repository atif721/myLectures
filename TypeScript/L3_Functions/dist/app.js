"use strict";
/* syntax

function funcName(params: type) : returnType {
  return ...
}
*/
Object.defineProperty(exports, "__esModule", { value: true });
function greet(name) {
    return `Hello, ${name}`;
}
// console.log(greet("Atif"));
// function type signature
let greetFunction;
greetFunction = function (name) {
    return `Hi, ${name}`;
};
// console.log(greetFunction("abd, this is funtion type signature"));
// optional and default parameter
function greet2(firstName, lastName, title) {
    return `Hello, ${firstName} ${lastName}! ${title ? title : "N/A"}`;
}
;
// console.log(greet2("Mr.", "Atif"));
// console.log(greet2("Mr.", "Alif", "Doctor"));
function defaultParam(name = "Guest") {
    return `Welcome to TS, ${name}`;
}
// console.log(defaultParam());
// console.log(defaultParam("Abdullah"));
// never return type
function throwError(message) {
    throw new Error("Something went wrong");
}
// console.log(throwError);
// // function add(a: number, b: number): number {
// //   return a + b;
// // }
const add = (a, b) => a + b; //implicit return
console.log(add(50, 30));
//# sourceMappingURL=app.js.map