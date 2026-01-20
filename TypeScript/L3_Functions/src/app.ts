/* syntax

function funcName(params: type) : returnType {
  return ...
}
*/

function greet(name: string): string {
  return `Hello, ${name}`;
}
// console.log(greet("Atif"));


// function type signature
let greetFunction: (name: string) => string;
greetFunction = function (name: string) {
  return `Hi, ${name}`;
};
// console.log(greetFunction("abd, this is funtion type signature"));


// optional and default parameter
function greet2(firstName: string, lastName: string, title?: string): string {
  return `Hello, ${firstName} ${lastName}! ${title ? title : "N/A"}`;
};
// console.log(greet2("Mr.", "Atif"));
// console.log(greet2("Mr.", "Alif", "Doctor"));

function defaultParam(name: string = "Guest"): string {
  return `Welcome to TS, ${name}`;
}
// console.log(defaultParam());
// console.log(defaultParam("Abdullah"));


// never return type
function throwError(message: string): never {
  throw new Error("Something went wrong");
}
// console.log(throwError);


// // function add(a: number, b: number): number {
// //   return a + b;
// // }

const add = (a: number, b: number): number => a + b; //implicit return
console.log(add(50, 30));