let x = 20;
let y = 25;
//console.log(x+y);

let a = 73;
let b = "Atif";
//console.log(b+a);

let x1 = 999999999999999;
let x2 = 99999999999999999; // cannot print excess than 15 number
//console.log(x1);
//console.log(x2);

let y1 = 0.2;
let y2 = 0.1;
//console.log((y1 + y2));

// numeric strings

let X = "100";
let Y = "10";
// console.log(X/Y); // when + is used it works like concatenation

// console.log(isNaN(X));
// console.log(isNaN(Y));


// numbers methods
/*
toString()	Returns a number as a string
toExponential()	Returns a number written in exponential notation
toFixed()	Returns a number written with a number of decimals
toPrecision()	Returns a number written with a specified length
valueOf()	Returns a number as a number
*/

let num = "101";
// console.log(num.toString());

let num2 = 98.40880;
/*
console.log(num2.toExponential());
console.log(num2.toFixed(4));
console.log(num2.toPrecision(5));
console.log(num2.valueOf());
*/

// global methods
/*
Converting Variables to Numbers

Number()	Returns a number converted from its argument.
parseFloat()	Parses its argument and returns a floating point number
parseInt()	Parses its argument and returns a whole number
*/

// number properties
/*
MAX_VALUE	The largest number possible in JavaScript
MIN_VALUE	The smallest number possible in JavaScript
MAX_SAFE_INTEGER	The maximum safe integer (253 - 1)
MIN_SAFE_INTEGER	The minimum safe integer -(253 - 1)
POSITIVE_INFINITY	Infinity (returned on overflow)
NEGATIVE_INFINITY	Negative infinity (returned on overflow)
NaN	A "Not-a-Number" value
*/