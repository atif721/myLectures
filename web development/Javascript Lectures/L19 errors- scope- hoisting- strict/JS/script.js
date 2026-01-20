'use strict';

s = 3.14;

try {
  //   alert('Welcome')
} catch (err) {
  console.log('err.message');
}

function myFunction() {
  const message = document.getElementById('p01');
  message.innerHTML = '';
  let x = document.getElementById('demo').value;
  try {
    if (x.trim() == '') throw 'empty';
    if (isNaN(x)) throw 'not a number';
    x = Number(x);
    if (x < 5) throw 'too low';
    if (x > 10) throw 'too high';
  } catch (error) {
    message.innerHTML = 'Input is ' + error;
  }
}

// -----Scope-----

// hoisting
// x = 5;
// console.log(x);
// var x;

/*
y = 6;
//console.log(y);
let y;
*/
// declare variables at tops
console.clear();
