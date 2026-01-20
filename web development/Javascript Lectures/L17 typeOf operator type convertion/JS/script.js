// typeof operator
/*
string
number
boolean
bigint
symbol
null
undefined
The typeof operator returns the type of a variable or an expression.
*/

// All Together
/*
console.log(typeof ('John' + 'Doe')) // Returns "string"
console.log(typeof 'John') // Returns "string"
console.log(typeof 3.14) // Returns "number"
console.log(typeof (33 + 66)) // Returns "number"
console.log(typeof NaN) // Returns "number"
console.log(typeof 1234n) // Returns "bigint"
console.log(typeof true) // Returns "boolean"
console.log(typeof false) // Returns "boolean"
console.log(typeof { name: 'John' }) // Returns "object"
console.log(typeof [1, 2, 3, 4]) // Returns "object"
console.log(typeof {}) // Returns "object"
console.log(typeof []) // Returns "object"
console.log(typeof new Object()) // Returns "object"
console.log(typeof new Array()) // Returns "object"
console.log(typeof new Date()) // Returns "object"
console.log(typeof new Set()) // Returns "object"
console.log(typeof new Map()) // Returns "object"
console.log(typeof function () {}) // Returns "function"
console.log(typeof x) // Returns "undefined"
console.log(typeof null) // Returns "object"
*/

/*
// Returns function Object() {[native code]}:
console.log({ name: 'Atif', age: 20 }.constructor)

// Returns function Array() {[native code]}:
console.log([1, 2, 3, 4].constructor)

// Returns function Date() {[native code]}:
console.log(new Date().constructor)

// Returns function Set() {[native code]}:
console.log(new Set().constructor)

// Returns function Map() {[native code]}:
console.log(new Map().constructor)

// Returns function Function() {[native code]}:
console.log(function () {}.constructor)

function isArray(myArray) {
  //   console.log(myArray.constructor.toString().indexOf('Array') > -1)
  return myArray.constructor === Array
}

function isArray2(myArray) {
  console.log(myArray.constructor.toString().indexOf('Array') > -1)
}

// isArray([1, 2, 3])
console.log(isArray([1, 2, 3]))
isArray2({ fname: 'Atif' })

let person = { firstName: 'John', lastName: 'Doe', age: 50, eyeColor: 'blue' }
person = null // Now value is null, but type is still an object
console.log(person)
// typeof undefined      // undefined
// typeof null           // object
// null === undefined    // false
// null == undefined     // true
*/

// type conversion

// Number method
/*
Number()	Returns a number, converted from its argument
parseFloat()	Parses a string and returns a floating point number
parseInt()	Parses a string and returns an integer
toExponential()	Returns a string, with a number rounded and written using exponential notation.
toFixed()	Returns a string, with a number rounded and written with a specified number of decimals.
toPrecision()	Returns a string, with a number written with a specified length
*/

console.log(Number('3.1416'))
console.log(Number(''))
console.log(Number('        '))
console.log(Number('35 34'))
console.log(parseFloat('4.55'))
console.log(parseInt('4.55'))

let y = '5555'
let x = +y // converts string to number with unary operator
console.log(x)

console.log(String(100 + 100))
