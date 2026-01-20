"use strict";
// primitive data types
Object.defineProperty(exports, "__esModule", { value: true });
// string, number, boolean
let studentName = "Abdullah";
studentName = "Abdullah Atif";
let age = 20;
age = 21;
let str = "";
const id = 241311051;
// id = 22;
let isPassed = true;
//
// arrays tuples
let scores = [85, 90, 78];
let name = ["Atif", "Sabbir", "Mahfuz"];
//alternative way to declare array
let scores2 = [90, 96, 81];
// console.log(name[0] + ": " + scores[0]);
// tuples data type
let student = ["Abdullah", 21, true];
// console.log(student[2]);
// any type (not recommended)
let randomValue = "Hello";
randomValue = 10;
randomValue = true;
//unknown type
let value = "World";
if (typeof value === "string") {
    // console.log(value.toUpperCase());
}
//void type
function logMessage() {
    console.log("Logged Successfully");
}
logMessage();
// defined a type
function gretting(name) {
    return `Hello ${name}`;
}
console.log(gretting("Atif"));
// null and undefined types
let u = undefined;
let n = null;
//type inference (guesses the type automatically)
let city = "Rajshahi";
//# sourceMappingURL=app.js.map