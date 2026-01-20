/*
In an object method, this refers to the object.
Alone, this refers to the global object.
In a function, this refers to the global object.
In a function, in strict mode, this is undefined.
In an event, this refers to the element that received the event.
Methods like call(), apply(), and bind() can refer this to any object.
*/

// this in Method
const person = {
  firstName: 'John',
  lastName: 'Doe',
  id: 5566,
  fullName: function () {
    return this.firstName + ' ' + this.lastName;
  },
};

//this Alone
let x = this; // when "use strict" mode this also refers to the global object:

// this in a func(default)
function myFunction() {
  return this;
}

// this in a func(strict)
// "use strict"
function myFunction() {
  return this; // here this is undefined
}

// this in event Handlers
//<button onclick="this.style.display='none'">Click to Remove Me!</button>;

// here we are using implicit function binding
const person2 = {
  firstName: 'Abdullah',
  lastName: 'Atif',
  id: 1051,
  fullName: function () {
    return this.firstName + ' ' + this.lastName;
  },
  //   getFullName: function () {
  //     return this.fullName();
  //   },
};
// console.log(person2.getFullName());

// here explicit function binding
// call(), apply() two methods are there

const person3 = {
  fullName: function () {
    return this.firstName + ' ' + this.lastName;
  },
};

const person4 = {
  firstName: 'John',
  lastName: 'Doe',
};

// Return "John Doe":
// console.log(person3.fullName.call(person4));

const member = {
  firstName: 'Hege',
  lastName: 'Nilsen',
};
let fullName = person.fullName.bind(member);
// console.log(fullName());

// Arrow function

hello = () => {
  return 'Hello World';
};

// console.log(hello());
myFunction = () => {};

// Classes

// class Car {
//   constructor(name, year) {
//     this.name = name;
//     this.year = year;
//   }
// }

// const car1 = new Car('Toyota', 2017);
// const car2 = new Car('BMW', 2020);
// const car3 = new Car('Mercedes', 2018);

// console.log(car1.name, car1.year);

class Player {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  play(status) {
    console.log(`${this.name} is playing ${status}`);
  }
}

const play1 = new Player('Hridoy', 22);
const play2 = new Player('Shoriful', 21);
// play1.play("well");
// play2.play("bad");

// -------- JSON -----------

let text =
  '{ "employees" : [' +
  '{ "firstName":"John" , "lastName":"Doe" },' +
  '{ "firstName":"Anna" , "lastName":"Smith" },' +
  '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

console.log(text);
const object = JSON.parse(text); // convert texts into objects
console.log(object);

let testPerson = {
  firstName: 'Abdullah',
  lastName: 'Atif',
  age: 20,
  dept: 'CSE',
};

console.log(JSON.stringify(testPerson)); // converts objects into text

