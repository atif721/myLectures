let w;

function startWorker() {
  if (typeof Worker !== 'undefined') {
    // worker available

    // if w worker is not already defined

    if (typeof w == 'undefined') {
      // create a w worker
      w = new Worker('./JS/worker.js');
    }

    w.onmessage = function (e) {
      document.getElementById('demo1').innerHTML = e.data;
    };
  } else {
    alert("Browser doesn't support web worker");
  }
}

function stopWorker() {
  if (typeof Worker !== 'undefined') {
    w.terminate();
    w = undefined;
  } else {
    alert("Browser doesn't support web worker");
  }
}

// Web Fetch API

const display = document.getElementById('display');

// with promise

// function getData() {
//   fetch('http://127.0.0.1:5500/L33/data.txt')
//     .then(function (data) {
//       return data.text();
//     })
//     .then(function (data1) {
//       return (display.innerText = data1);
//     });
// }

// with async await

async function getData() {
  const res = await fetch('http://127.0.0.1:5500/L33/data.txt');
  const data = await res.text();

  display.innerHTML = data;
}

//  Web geolocation API

const display2 = document.getElementById('display2');

function getLocation() {
  if (navigator.geolocation) {
    // navigator.geolocation.getCurrentPosition(showPosition, showError);
    navigator.geolocation.watchPosition(showPosition, showError); // required smartphone to test this option
  } else {
    display2.innerHTML = 'GeoLocation is not available in browser';
  }
}

function showPosition(position) {
  display2.innerHTML = `Latitude :  ${position.coords.latitude} <br/> Longitude : ${position.coords.longitude}`;
}

function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      display2.innerHTML = 'User denied the request for geolocation';
      break;
    case error.POSITION_UNAVAILABLE:
      display2.innerHTML = 'Location information is unavailable';
      break;
    case error.TIMEOUT:
      display2.innerHTML = 'The request to get user location timed out';
      break;
    case error.UNKNOWN_ERROR:
      display2.innerHTML = 'An unknown error occurred';
      break;
    default:
      display2.innerHTML = 'ERROR!';
  }
}
