// primitive data types

// string, number, boolean
let studentName: string = "Abdullah";
studentName = "Abdullah Atif";

let age: number = 20;
age = 21;

let str: string = "";
const id: number = 241311051;
// id = 22;

let isPassed: boolean = true;
//
// arrays tuples

let scores: number[] = [85, 90, 78];
let name: string[] = ["Atif", "Sabbir", "Mahfuz"];

//alternative way to declare array
let scores2: Array<number> = [90, 96, 81];

// console.log(name[0] + ": " + scores[0]);


// tuples data type

let student: [string, number, boolean] = ["Abdullah", 21, true];
// console.log(student[2]);


// any type (not recommended)
let randomValue: any = "Hello";

randomValue = 10;
randomValue = true;

//unknown type
let value: unknown = "World";
if (typeof value === "string") {
  // console.log(value.toUpperCase());
}

//void type

function logMessage(): void {
  console.log("Logged Successfully");
}
logMessage();

// defined a type
function gretting(name: string): string {
  return `Hello ${name}`;
}
console.log(gretting("Atif"));

// null and undefined types
let u: undefined = undefined;
let n: null = null;

//type inference (guesses the type automatically)
let city = "Rajshahi";
