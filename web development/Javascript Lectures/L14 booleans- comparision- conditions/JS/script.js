// booleans

let x = false;
let y = true;
console.log(y);

// Boolean() function returns true or false according to conditions
let x1 = 10;
let x2 = 11;
console.log(Boolean(x1>x2));
console.log(Boolean(1+1));

// conditions

let age = "A15";

console.log((age >= 18) ? ((age < 30) ? "You are Adult" : "You are OLD") : "You're young");

age = Number(age);
if (isNaN(age)) {
  console.log("Input is not a number");
} else {
  console.log((age < 18) ? "Too young" : "Old enough");
}

console.clear();

// conditions

// let y1 = 18;

// if(y1 >= 18){
//     console.log("You Are ADULT!");
// } else if(y1 >= 11 && y1 <= 17) {
//     console.log("You're Young");
// } else {
//     console.log("You are little");
// }

switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      console.log(day);
      break;
    case 1:
      day = "Monday";
      console.log(day);
      break;
    case 2:
       day = "Tuesday";
       console.log(day);
      break;
    case 3:
      day = "Wednesday";
      console.log(day);
      break;
    case 4:
      day = "Thursday";
      console.log(day);
      break;
    case 5:
      day = "Friday";
      console.log(day);
      break;
    case 6:
      day = "Saturday";
      console.log(day);
    default:
      console.log("Invalid Day");
}

switch (new Date().getDay()) {
  case 3:
  case 4:
    text = "Soon it is Weekend";
    console.log(text);
    break;
  case 4:
  case 5:
    text = "It is Weekend";
    console.log(text);
    break;
  default:
    text = "Looking forward to the Weekend";
}

let test = "1";
switch (test) {
  case 0:
    text = "Off";
    console.log(text);
    break;
  case 1:
    text = "On";
    console.log(text);
    break;
  default:
    text = "No value found";
    console.log(text);
}