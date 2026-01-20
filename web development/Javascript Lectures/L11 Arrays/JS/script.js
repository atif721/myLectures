const cars = ["BMW", "Mercedes", "Honda"];
console.log(cars);

const cars1 = [];
cars1[0] = "BMW";
cars1[1] = "Toyota";
cars1[2] = "NISSAN";
console.log(cars1);

const array1 = ["Atif", 51, 96.3];
console.log(array1);

const cars2 = ["BMW", "Mercedes", "Honda"];
cars2[4] = "Mitsubishi";
console.log(cars2[cars2.length - 1]);
console.log("");

// const fruits = ["Apple", "Orange", "Mango", "Litchi"];

/*for(i = 0; i < fruits.length; i++){
    console.log(fruits[i])
}*/

const fruits = ["Banana", "Orange", "Apple", "Mango", "Litchi"];
let fLen = fruits.length;

let text = "<ul>";

function myFunction(value) {
    text += "<li>" + value + "</li>";
}

fruits.forEach(myFunction);
text += "</ul>";
document.getElementById("demo").innerHTML = text;

// associative array
const person = [];
person[0] = "John";
person[1] = "Doe";
person[2] = 46;
console.log(person[0] + " " + person[2]);

const person2 = [];
person2["firstName"] = "Abdullah";
person2["lastName"] = "Atif";
person2["age"] = 20;

console.log(person2);

document.write("<pre><h1>");
document.write(person2);
document.write("</pre></h1>");

// array methods

/*
Array length //returns array size
Array toString() // converts to string
Array at() // Get the require element using at():
Array join() // method also joins all array elements into a string.
Array pop() // method removes the last element from an array:
Array push() // method adds a new element to an array (at the end):
Array shift() // method removes the first array element and "shifts" all other elements to a lower index.
Array unshift() //  method adds a new element to an array (at the beginning), and "unshifts" older elements:
Array delete() // Using delete() leaves undefined holes in the array. Use pop() or shift() instead.
Array concat() // method creates a new array by merging (concatenating) existing arrays:
Array copyWithin() // method copies array elements to another position in an array:
Array flat() // method creates a new array with sub-array elements concatenated to a specified depth.
Array splice() // method can be used to add new items to an array:
Array toSpliced() // method as a safe way to splice an array without altering the original array.
Array slice() // method slices out a piece of an array into a new array:
*/

const fruit = ["Banana", "Orange", "Apple", "Mango", "Litchi"];
console.clear();
console.log(fruit.toString());

console.log(fruit.join(" * "));
console.log(fruit.pop());
console.log(fruit);

console.log(fruit.push("mango2"));
console.log(fruit);

console.log(fruit.shift());
console.log(fruit);

console.log(fruit.unshift("Banana"));
console.log(fruit);

console.clear();

//console.log(fruit.splice(0, 2, "Kiwi", "Pineapple"));
// console.log(fruit);
// console.log(fruit.splice(2, 2));
// console.log(fruit);

// console.log(fruit.concat("cars"));
// console.log(fruit.concat(cars));

// console.log(fruit.slice(2,3));

// console.log(fruit.sort());
// console.log(fruit.reverse());

const num = [15, 12, 22, 5, 45, 87, 65];

// console.log(num.sort());

// console.log(num.sort(function(a, b){return a-b}));
// console.log(num.sort(function(a, b){return b-a}));
// console.log(num.sort(function(){return 0.5 - Math.random()}));

// array iteration

/*
Array forEach
Array map()
Array flatMap()
Array filter()
Array reduce()
Array reduceRight()
Array every()
Array some()
Array from()
Array keys()
Array entries()
Array with()
Array Spread (...)
*/

function myFunction(value, index, array){
    console.log(value);
    console.log(index);
    console.log(array);
}

function myFunction2(value){
    return value*2;
}

function myFunction3(value, index, array){
    return value > 16;
}

function myFunction4(total, value, index, array){
    console.log(total);
    console.log("---");
    return total + value;
}

function myFunction5(value, index, array){
    return value >=15;
}


//num.forEach(myFunction);
// console.log(num.map(myFunction));
// console.log(num.flatMap(myFunction2));
// console.log(num.filter(myFunction3));
// console.log(num.reduceRight(myFunction4)); // use second parameter when first value is 0
console.log(num.every(myFunction5)); //if all values satisfies condition only then it will be true or false
console.log(num.some(myFunction5)); //if some values satisfies condition only then it will be true or false
console.log(fruit.indexOf("Apple")+1);
console.log(fruit.includes("Pineapple"));
console.log(num.find(myFunction3));
console.log(num.findIndex(myFunction3));
console.log(Array.from("ABCDEF"));

