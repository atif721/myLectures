// iterables
/*
for (variable of iterable) {
}

const Name = 'W3Schools'
for (const x of Name) {
}

const letters = ['a', 'b', 'c']
for (const x of letters) {
}
*/

// Set

// const letter = new Set(["a","b","c"]);

/* const letter = new Set();
letters.add("a");
letters.add("b");
letters.add("c");
*/

/*
const letter = new Set();

const a = "a";
const b = "b";
const c = "c";

letters.add(a);
letters.add(b);
letters.add(c);
*/
/*
const letter = new Set(['a ', 'b ', 'c '])

let text = ''
for (const x of letter) {
  text += x
}
console.log(text)
*/
/*
const letter = new Set(['a', 'b', 'c'])

// Does the Set contain "d"?
answer = letter.has('d')
console.log(answer)
*/
/*
const letters = new Set(['a', 'b', 'c'])
const myIterator = letters.values()

let text = ''
for (const entry of myIterator) {
  text += entry
}
console.log(text)
*/

/*
const letters = new Set(["a","b","c"]);
const myIterator = letters.keys();

let text = "";
for (const x of myIterator) {
  text += x;
}
console.log(text);
*/

/*
const letters = new Set(['a', 'b', 'c'])
const myIterator = letters.entries()

let text = ''
for (const entry of myIterator) {
  text += entry
}
console.log(text);
*/

// map
/*
new Map()	Creates a new Map object
clear()	Removes all the elements from a Map
delete()	Removes a Map element specified by a key
entries()	Returns an iterator object with the [key, value] pairs in a Map
forEach()	Invokes a callback for each key/value pair in a Map
get()	Gets the value for a key in a Map
groupBy()	Groups object elements according to returned callback values
has()	Returns true if a key exists in a Map
keys()	Returns an iterator object with the keys in a Map
set()	Sets the value for a key in a Map
size	Returns the number of Map elements
values()	Returns an iterator object of the values in a Map
*/

const fruits = new Map([
  ['litchi', 277],
  ['pineapples', 100],
  ['watermelon', 73],
])
fruits.set('apples', 500)
fruits.set('bananas', 300)
fruits.set('oranges', 200)
console.log(fruits)
console.log(fruits.get('oranges'))
console.log(fruits.size)
fruits.delete('apples')
console.log(fruits)
console.log(fruits.has('apples'))

fruits.forEach(function (value, key) {
  console.log(key, ' ', value)
})

for (const x of fruits.entries()) {
  console.log(x)
}
