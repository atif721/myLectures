var arr = [1, 2, 3, 4];

// foreach,,, map,,, filter,,, find,,, indexOf

// foreach used just to iterate into an array and print the values of the arrays
// arr.forEach(function (val) {
//   console.log(val + " hello");
// });

// map is used to iterate into an array and returns another array
var ans1 = arr.map(function (val) {
  return val;
});
console.log(ans1);

// filter uses to filter values in arrays
var ans2 = arr.filter(function (val) {
  if (val > 3) {
    return true;
  } else return false;
});
console.log(ans2);

// find used to find any value either presented in array or not
var ans3 = arr.find(function (val) {
  if (val === 3) {
    return val;
  }
});

console.log(ans3);

//indexOf used to find the number of index of an element in array
var ans4 = arr.indexOf(21);
console.log(ans4);
