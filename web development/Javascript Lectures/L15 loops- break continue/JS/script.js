/*
const cars = ["BMW", "Mercedes", "Mitsubishi", "Nissan", "AMG"];

for (let i = 0; i < cars.length; i++) {
  //console.log(cars[i]);
}

for (let i = 0, len = cars.length; i < len; i++) {
  //console.log(cars[i]);
}

let i = 2;
let len = cars.length;
for (; i < len; i++) {
  //   console.log(cars[i]);
}

let j = 0;
for (; ; j++) {
  if (j > 10) {
    break;
  } else {
    // console.log(j);
  }
}

// for in loop (uses for printing objects)
const person = { fname: "Abdullah", lname: "Atif", age: 20 };

for (let x in person) {
  //console.log(person[x]);
}

// const numbers = [45, 4, 9, 8, 8, 2];
// for (let number in numbers) {
//   console.log(numbers[number]);
// } // don't use for-in in an array

// forOf loop
let a = [4, 45, 9, 8, 8, 2];

for (let y of a) {
  //   console.log(y);
}
*/

// while loop
let b = 0;
while (b < 10) {
  //   console.log(b);
  b++;
}

let text = "";
for (let i = 0; i < 10; i++) {
  if (i === 3) {
    continue; // to skip just one loop iteration
  }
  //   text += "The number is " + i + "\n";
  //   console.log(text);
  console.log(i);
}

const cars = ["BMW", "Volvo", "Saab", "Ford"];
list: {
  text += cars[0] + "\n";
  text += cars[1] + "\n";
  console.log(text);
  break list; // break with label reference
  text += cars[2] + "\n";
  text += cars[3] + "\n";
  console.log(text);
}

function myFunction() {
  console.log("aa");
}
