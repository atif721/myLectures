// JS strings
let firstName = "Abdullah";
let lastName = "Atif";

let x; // now x is undefined
x = 5; // now x is a number
x = "Atif"; // now x is a string

// JS numbers

let x1 = 73.7; // with decimals
let x2 = 7; // without decimals
let y1 = 123e5; // 12300000
let y2 = 123e5 - 0; // 0.00123

// JS booleans
let a = 5;
let b = 10;
let c = 15;

m = (a==b) // returns false
n = (b!=c) // returns true

// JS Arrays
const cars = ["Toyota", "Mercedes", "BMW"];

// JS Objects
let z = {firstName:"Abdullah", lastName:"Atif", age:20, eyeColor:"black"}; // object

// JS functions

/* syntax
    function(parameter1, parameter2, ...){
        statements
    }
*/

function multiply(p1,p2){
    return p1 * p2;
}

document.getElementById("pselect1").innerHTML = "Hello";

function sleep(names, times){
    document.write("<h1 style='color:blue;margin-left:50px;'>" + names + " is sleeping " + "from " + times + "</h1>");
}

sleep("Atif", "10 PM");

let result = multiply(7, 5);
//let result = multiply;

document.write("<h1 style='color:red;margin-left:50px;'>" + result + "</h1>");

let carName = "Toyota";
function myFunc(){
    let carName = "BMW";
    document.write("<h1 style='color:red;margin-left:50px;'>" + carName + "</h1>");
}

myFunc();

document.write("<h1 style='color:red;margin-left:50px;'>" + carName + "</h1>");
