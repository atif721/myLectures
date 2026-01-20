// ------------- Asynchronous async-await -----------

const Payment = true;
const marks = 70;

function enroll() {
  console.log('Course enrollment is in progress');

  const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (Payment) {
        resolve();
      } else {
        reject('Payment Failed');
      }
    }, 2000);
  });

  return promise;
}

function progress() {
  console.log('Course on progress');

  const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (marks >= 80) {
        resolve();
      } else {
        reject('You could not get certificate for less marks');
      }
    }, 2000);
  });
  return promise;
}

function getCertificate() {
  console.log('Preparing your certificate');
  const promise = new Promise(function (resolve) {
    setTimeout(() => {
      resolve('Congo! You have done it');
    }, 1000);
  });
  return promise;
}

async function Course() {
  try {
    await enroll();
    await progress();
    const message = await getCertificate();

    console.log(message);
  } catch (error) {
    console.log(error);
  }
}
Course();
