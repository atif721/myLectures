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

// filter 
var ans2 = arr.filter(function (val) {
  if (val > 3) {
    return true;
  } else return false;
});
console.log(ans2);
