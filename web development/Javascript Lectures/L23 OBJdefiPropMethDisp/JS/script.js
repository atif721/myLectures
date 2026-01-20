console.clear();
const Person = {
  name: 'Atif',
  age: 20,
  //   getname: function () {
  //     return 'Abdullah';
  //   },
  // name & age & are properties and getname is a method in object
};

// Person.name = 'Jannat'; //changing value or muting name value but not reassigning
// console.log(Person.name + '+' + Person.getname());

// .......Properties......
/*
Object.defineProperty(object, property, descriptor) // Adding or changing an object property
Object.defineProperties(object, descriptors) // Adding or changing object properties
Object.getOwnPropertyDescriptor(object, property)// Accessing a Property
Object.getOwnPropertyDescriptors(object) // Accessing Properties
Object.getOwnPropertyNames(object) // Returns all properties as an array
Object.getPrototypeOf(object) // Accessing the prototype
*/

Person.country = 'Bangladesh';
// console.log(Person);

let a = 'age';
// console.log(Person[a]); // we can call the properties by using this method when it is stored in a variable

let txt = '';
for (let b in Person) {
  txt += ' ' + Person[b];
}
// console.log(txt);

delete Person.country;
// console.log(Person);

const myObj = {
  name: 'John',
  age: 22,
  car: [
    { name: 'Ford', models: ['Fiesta', 'Focus', 'Mustang'] },
    { name: 'BMW', models: ['320', 'X3', 'X5'] },
    { name: 'Toyota', models: ['Allion', 'Premio', 'Axio'] },
  ],
};

// console.log(myObj);

// Object methods

const Person2 = {
  firstName: 'Abdullah',
  lastName: 'Atif',
  id: 1051,
};

// Person2.fullName = function () {
//   return this.firstName + ' ' + this.lastName;
// }; // here value would be assigned by = sign
// console.log(Person2.fullName().toUpperCase());

// Object.assign(Person, Person2); //concat two object values
// console.log(Person);

// console.log(Object.entries(Person2)); // return all object values as an array

const fruits = { Bananas: 300, Oranges: 200, Apples: 500 };

let text = '';
for (let [fruit, value] of Object.entries(fruits)) {
  text += fruit + ': ' + value + '\n';
} // print the object value as text
// console.log(text);

const fruit = [
  ['apples', 300],
  ['pears', 900],
  ['bananas', 500],
];

// console.log(Object.fromEntries(fruit)); // converts arrays into objects

const fruits1 = [
  { name: 'apples', quantity: 300 },
  { name: 'bananas', quantity: 500 },
  { name: 'oranges', quantity: 200 },
  { name: 'kiwi', quantity: 150 },
];

function myCallback({ quantity }) {
  return quantity >= 200 ? 'ok' : 'low';
}
// console.log(Object.groupBy(fruits1, myCallback)); // for sorting

// Object Display

let text1 = '';
for (let x in Person2) {
  text1 += Person2[x] + ' ';
}
document.getElementById('demo').innerHTML = text1;

const myArray = Object.values(Person2);
for (x of myArray) {
  // console.log(x + ' ');
}
// JSON.stringify converts everything into string
