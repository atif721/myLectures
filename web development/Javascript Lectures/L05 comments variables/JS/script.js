
var x = 5;
var y = 6;
var z = x + y;

document.getElementById("h1select").innerHTML = z;

let X = 7;
let Y = 62;
let Z = X + Y;

var a = 3;
// here a is 3
{
    var a = 4;
    // here a is 4
}
// here a is 4


let m = 5;
// here m is 5
{
    let m = 100;
    document.getElementById("h1select2").innerHTML = m;
    // here m is 10
}
// here m is 5

// hoisting

// var carName; that's how js reads code
// carName = undefined;
carName = "Mercedes";
var carName;
document.getElementById("pselect1").innerHTML = carName;

// let carName; in let there is dead zone while typing code like this
// carName = "Mercedes";
// let carName;
//document.getElementById("pselect1").innerHTML = carName;


let a;
a = 5;
// for let variable cannot be declared in same name but can be reassigned value
a = 7; //reassigning

const a = [1, 2, 3, 4];


const b = 5; // cannot change the value