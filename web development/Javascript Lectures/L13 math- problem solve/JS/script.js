// methods
/*
Math.E        // returns Euler's number
Math.PI       // returns PI
Math.SQRT2    // returns the square root of 2
Math.SQRT1_2  // returns the square root of 1/2
Math.LN2      // returns the natural logarithm of 2
Math.LN10     // returns the natural logarithm of 10
Math.LOG2E    // returns base 2 logarithm of E
Math.LOG10E   // returns base 10 logarithm of E
*/


console.log(
Math.round(4.6),
Math.round(4.5),
Math.round(4.4),
Math.round(4.3));

console.log(
Math.ceil(4.9),
Math.ceil(4.7),
Math.ceil(4.4),
Math.ceil(4.2),
Math.ceil(-4.2));

console.log(
Math.floor(4.9),
Math.floor(11.7),
Math.floor(5.4),
Math.floor(30.2),
Math.floor(-4.2)
);

console.log(
Math.trunc(4.9),
Math.trunc(11.7),
Math.trunc(7.4),
Math.trunc(4.2),
Math.trunc(-9.2),
);

console.log(
Math.sign(-4),
Math.sign(0),
Math.sign(4)
);

console.log(
   "POW : " + Math.pow(4,3)
);

console.log(
   "SQRT : " + Math.sqrt(49)
);

console.log(
    "ABS : " + Math.abs(-9)
);

console.log(
   "SIN : " + Math.sin(30 * Math.PI / 180)
);

console.log(
    "COS : " + Math.cos(30 * Math.PI / 180)
);

console.log(
    "MIN : " + Math.min(30, 15, 40, 5, 7, 4, 11)
);

console.log(
    "MAX : " +  Math.max(30, 15, 40, 5, 7, 4, 11)
);

console.log(
    "LOG-10,1,2 : " +  Math.log10(10), Math.log(10), Math.log2(10)
);


console.log(
    "Random (0-1) : " +  Math.random()
);

console.log(
    "Random (0-10) : " +  (Math.floor(Math.random() * 11))
);

console.log(
    "Random (0-99) : " +  (Math.floor(Math.random() * 99))
);

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

console.log(getRndInteger(1,20));