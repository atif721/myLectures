console.clear();
// ------------- CallBackFunctions -----------

function myDisplay(some) {
  console.log(some);
}

function myCalculator(num1, num2) {
  let sum = num1 + num2;
  myDisplay(sum);
}

// myCalculator(73, 28);
// let result = myCalculator(21, 28);
// myDisplay(result);

// now above two case there two different problems like in first method we have to call function twice and in 2nd method we can't control to call the function inside myCalculator
// to solve this issue JS provides callback function......Callback function means passing a function declaration as an argument of a function

function Display(some) {
  console.log(some);
}

function Calculator(num1, num2, callback) {
  let sum = num1 + num2;
  if (callback) {
    callback(sum);
  }
  return sum;
}

// Calculator(73, 28, Display);

// ------------- Asynchronous Behavior -----------

// console.log('Line 1 code');
// setTimeout(function () {
//   console.log('Line 2 code');
// }, 0);
// setInterval(function () {
//   console.log('Line 4 code');
// }, 10);
// console.log('Line 3 code');

// ------------- CallBack Patterns -----------

// const Payment = true;
// const marks = 90;

// function enroll(callBackProgress) {
//   console.log('Course enrollment is in progress');

//   setTimeout(function () {
//     if (Payment) {
//       callBackProgress();
//     } else {
//       console.log('Payment Failed');
//     }
//   }, 2000);
// }

// function progress(callBackGetCert) {
//   console.log('Course on progress');

//   setTimeout(function () {
//     if (marks >= 80) {
//       callBackGetCert();
//     } else {
//       console.log('You could not get certificate for less marks');
//     }
//   }, 5000);
// }

// function getCertificate() {
//   console.log('Preparing your certificate');

//   setTimeout(() => {
//     console.log('Congo! You have done it');
//   }, 1000);
// }

// enroll(function () {
//   progress(getCertificate);
// });


