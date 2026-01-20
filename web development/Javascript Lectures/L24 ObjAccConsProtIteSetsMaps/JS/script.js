console.clear();
// Object Accessors(Getters and Setters)
const Person = {
  fName: 'Abdullah',
  lName: 'Atif',
  language: 'Eng',
  Age: 0,
  get lang() {
    return this.language;
  },
  //   get FullName() {
  //     return this.fName + ' ' + this.lName;
  //   },
  //   set Age1(x) {
  //     this.Age = x;
  //   },
};
Object.defineProperty(Person, 'FullName', {
  get: function () {
    return this.fName + ' ' + this.lName;
  },
});
Object.defineProperty(Person, 'Age1', {
  set: function (x) {
    this.Age = x;
  },
});
Person.Age1 = 20;
// console.log('Language : ' + Person.lang);
// console.log('Full Name : ' + Person.FullName);
// console.log(Object.entries(Person));

// Object constructors

function Person1(first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.fullName = function () {
    return this.firstName + ' ' + this.lastName;
  };
}

const Atif = new Person1('Abdullah', 'Atif', 20);
const Jannat = new Person1('Rubaiya', 'Jannat', 23);
Atif.country = 'Bangladesh'; //allowed
// Person.country = "Bangladesh"// not allowed

// console.log(Atif);
// console.log(Jannat.fullName());

// Object Prototypes
Person1.prototype.dept = 'CSE'; //allowed
// console.log(Jannat.dept);

// Object Iterables............

// while printing array values use for-of loop
const numbers = [1, 2, 3];
for (let x of numbers) {
  // console.log(x);
}

// while printing object values use for-in loop
const numbers2 = {};
numbers2[Symbol.iterator] = function () {
  let n = 0;
  let done = false;
  return {
    next() {
      n += 10;
      if (n >= 50) {
        done = true;
      }
      return {
        value: n,
        done: done,
      };
    },
  };
};

for (let x of numbers2) {
  // console.log(x);
}
const numIterator = numbers2[Symbol.iterator]();

// Object Sets.......

const num = new Set([1, 2, 3]);
const num1 = new Set();
num1.add(5);
num1.add(6);
// console.log(num);
// console.log(num1);

const letter = new Set(['a', 'b', 'c']);
const letterIterator = letter.values();
for (let a of letterIterator) {
  // console.log(a);
}

// Maps.....

const fruits = new Map([
  ['apples', 500],
  ['bananas', 300],
  ['oranges', 200],
]);

fruits.set('litchi', 150);
fruits.set('watermelon', 250);
fruits.set('oranges', 350);

console.log(fruits);
