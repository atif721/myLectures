console.clear();
// function functionName(parameter){
//     code to be executed
// }

function sleep() {
  console.log('I am sleeping');
}

const sl = function () {
  console.log('I am sleeping...2');
};

// self-invoking functions or IIFE - (Immediately Invoked Function Expression)
(function () {
  //   console.log('I am self-invoking function');
})();

// Arrow Function
// when a function is declared in objects we can't declare that with arrow function method because arrow function doesn't support this keyword
// we can't use this in arrow function
const x = (a, b) => a * b; //when only to return values
const y = () => 5; // when only to return values
// console.log(x(2, 10));
// console.log(y());

const z = () => {
  console.log('Hello I am Arrow Function');
};

const a = function (a, b) {
  console.log(arguments); // returns arguments value as an array
  return a + b;
};
// console.log(a(22,32))

// ------Functions Parameters ---------
// when object is passed through parameter here reference is passed that's why when i change the value of object it also changes the outside object declaration value
// but when a variable value is passed only value is passed so if we change the value inside function it doesn't change the declaration value

function myfunction(a) {
  a.one = 7;
  return a.one * a.two;
}

let m = {
  one: 4,
  two: 5,
};
// console.log(myfunction(m));
// console.log(m);

// ------- Function Invocation ---------

// This is a function constructor:
function myFunction(arg1, arg2) {
  this.firstName = arg1;
  this.lastName = arg2;
}
const myObj = new myFunction('John', 'Doe');
// console.log(myObj.firstName);

// ------- Function .call() ---------
const person = {
  fullName: function (city, country) {
    return this.firstName + ' ' + this.lastName + ' ' + city + ' ' + country;
  },
};
const person1 = {
  firstName: 'Abdullah',
  lastName: 'Atif',
};
const person2 = {
  firstName: 'Mary',
  lastName: 'Doe',
};

const result = person.fullName.call(person1, 'Rajshahi', 'Bangladesh');
const result2 = person.fullName.call(person2, '', '');
// console.log(result);
// console.log(result2);

// ------- Function .apply() ---------

const Person = {
  fullName: function (city, country) {
    return this.firstName + ' ' + this.lastName + ',' + city + ',' + country;
  },
};
const Person1 = {
  firstName: 'Rubaiya',
  lastName: 'Jannat',
};

const Result = person.fullName.apply(Person1, ['Kurigam', 'Rangpur']);
// console.log(Result);
// difference between apply and call is apply can send arguments as an array but call can't

const Value = Math.max.apply(Math, [73, 12, 21, 45, 6]);
// console.log(Value);

// ------- Function Closures ---------

function Temp() {
  let counter = 0;
  return function () {
    counter += 1;
  };
}

const add = Temp();
add();
add();
add();

console.log(add());
