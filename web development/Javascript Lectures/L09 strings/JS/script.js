document.write("<pre><h1 style='margin-left:50px;'>");
document.write("</h1></pre>");

let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let test2 = "We are \n the so-called \"Vikings\" " +
"from the north ";
let test3 = "We are the so-called \\Vikings\\ from the north ";

/*
document.write("<pre><h1 style='color:green;margin-left:50px;'>" + text.length + "</h1></pre>");
document.write("<pre><h2 style='color:green;margin-left:50px;'>" + test2 + "</h2></pre>");
document.write("<pre><h2 style='color:green;margin-left:50px;'>" + test3 + "</h2></pre>");
*/

// let lastName  = "Atif";
let lastName = new String("Atif"); // this slows program so don't write strings like this // strings can be objects

// strings methods
/*
    slice(start, end);
    substring(start, end);
    substr(start, length);
    str.length (returns strings length)
    str.replace (replace a specific string)
    str.toUpperCase();
    str.toLowerCase();
    str.concat(" ", " ");
    str.trim();
    str.padStart(value, which_number/string);
    str.padEnd(value, which_number/string);
    str.charAt();
    str.charCodeAt();
    str[0];
    str.split(",");
    str.split(" ");
    str.split("|");
*/

let str = "Apple, Banana, Pineapple";
// console.log(str.slice(0, 6));
// console.log(str.slice(-12, -6)); // when (-) it is meant that index starting from end count index from 1
// console.log(str.substring(7, 13));

const s = "Bangladesh is a beautiful country";
//console.log(s.length); // when we prints strings like this they consider the string as object and works with object properties like .length

let love = "I Love MySelf";
let change = love.replace("MySelf","Jannat"); // it only changes the word not entire variable value !!!.
// console.log(change);


/*


let upLow = "HelLo ATiF";
console.log(upLow.toLowerCase());
console.log(upLow.toUpperCase());

let fi = "Abdullah".concat(" + ", "Rubaiya");
console.log(fi);

let hi = "         Hello World       ";
console.log(hi);
console.log(hi.trim());

let text2 = "5";
console.log(text2.padStart(5,"A"));
console.log(text2.padEnd(3,7));

let str2 = "Hello, $World";

console.log(str2.charAt(6)); // returns single letter
console.log(str2.charCodeAt(4)); // returns ASCII value of letter
console.log(str2[0]);
console.log(str2.split(",")); //split on commas
console.log(str2.split(" ")); // split on space
console.log(str2.split("$")); // split on special char
console.log(str2.split("")); // converts full into an array


*/

// ---string search---

/*
    string.indexOf();
    string.lastIndexOf();
    string.startsWith();
    string.endsWith();
    string.search();
    string.match();
    string.includes();

*/

/*

let test = "Please, Forgive me, Please, Please. World";

console.log(test.search("me"));
console.log(test.indexOf("Forgive"));
console.log(test.lastIndexOf("Please"));
console.log(test.startsWith("Please",5)); // second parameter is position
console.log(test.endsWith("me",18)); // second parameter is length where to where search
console.log(test.match(/se/));
console.log(test.includes("World",37)); // second parameter is position

*/

// string template literals

let a = `Hello World, I am "Atif"`;
console.log(a);

let para = `Hello world.
I am a student in CSE. Dept of CSE. Varendra University`; // `` ticks have the power to go on new line without using ignore case
console.log(para);

let country = 'Bangladesh';
let aa = 17;
let b = 1;
//let sentence = 'I love ' + country + ' and it is a big country';
let sentence = `I love ${country} and it is a big country. It's population is ${aa + b} crore`; // this is easy syntax for using template literals
console.log(sentence);
