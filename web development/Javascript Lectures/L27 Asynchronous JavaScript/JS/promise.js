console.clear();
// ------------- Asynchronous Promises -----------

// const Status = true;
// console.log('Task 1');
// const promise = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     if (Status) {
//       resolve('Task 2');
//     } else {
//       reject('Failed');
//     }
//   }, 10000);
// });

// promise.then(function (value) {
//   console.log(value);
// });
// promise.catch(function (error) {
//   console.log(error);
// });
// console.log('Task 3');

// const Payment = true;
// const marks = 90;

// function enroll() {
//   console.log('Course enrollment is in progress');

//   const promise = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       if (Payment) {
//         resolve();
//       } else {
//         reject('Payment Failed');
//       }
//     }, 2000);
//   });

//   return promise;
// }

// function progress() {
//   console.log('Course on progress');

//   const promise = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       if (marks >= 80) {
//         resolve();
//       } else {
//         reject('You could not get certificate for less marks');
//       }
//     }, 2000);
//   });
//   return promise;
// }

// function getCertificate() {
//   console.log('Preparing your certificate');
//   const promise = new Promise(function (resolve) {
//     setTimeout(() => {
//       resolve('Congo! You have done it');
//     }, 1000);
//   });
//   return promise;
// }

// enroll()
//   .then(progress)
//   .then(getCertificate)
//   .then(function (value) {
//     console.log(value);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
