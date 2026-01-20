// JS BOM Navigator

const appName = document.getElementById('appName');
const appCodeName = document.getElementById('appCodeName');
const platform = document.getElementById('platform');
const cookieEnabled = document.getElementById('cookieEnabled');
const product = document.getElementById('product');
const appVersion = document.getElementById('appVersion');
const userAgent = document.getElementById('userAgent');
const language = document.getElementById('language');
const online = document.getElementById('online');
const javaEnabled = document.getElementById('javaEnabled');

appName.innerHTML = `Navigator appName : ${navigator.appName} </br>`;
appCodeName.innerHTML = `Navigator  appCodeName : ${navigator.appCodeName} </br>`;
platform.innerHTML = `Navigator platform : ${navigator.platform} </br>`;
cookieEnabled.innerHTML = `Navigator cookieEnabled : ${navigator.cookieEnabled} </br>`;
product.innerHTML = `Navigator product : ${navigator.product} </br>`;
appVersion.innerHTML = `Navigator appVersion  : ${navigator.appVersion} </br>`;
userAgent.innerHTML = `Navigator userAgent: ${navigator.userAgent} </br>`;
language.innerHTML = `Navigator language: ${navigator.language} </br>`;
online.innerHTML = `Navigator online : ${navigator.online} </br>`;
javaEnabled.innerHTML = `Navigator javaEnabled: ${navigator.javaEnabled} </br>`;

// JS BOM Popup

const confirm = document.getElementById('confirm');
const prompt = document.getElementById('prompt');

function showAlert() {
  window.alert('Hello World');
}

function showConfirm() {
  let text;
  if (window.confirm('Press a button')) {
    text = 'You pressed ok!';
  } else {
    text = 'You presses cancel!';
  }
  confirm.innerHTML = text;
}

function showPrompt() {
  let person = window.prompt('Please enter your name : ', 'Abdullah Atif');
  let text;
  if (person === null || person === '') {
    text = 'User cancelled the prompt!';
  } else {
    text = `Hello ${person}! How are you?`;
  }

  prompt.innerHTML = text;
}

// JS BOM Timeout

const timeout = document.getElementById('timeout');
const interval = document.getElementById('interval');
let timeOutInstant;
let intervalIns;
function startTimeout() {
  timeOutInstant = setTimeout(() => {
    timeout.innerHTML = `3 seconds over!`;
  }, 3000);
}

function stopTimeout() {
  clearTimeout(timeOutInstant);
}

function startInterval() {
  intervalIns = setInterval(() => {
    interval.innerHTML = new Date().toLocaleTimeString();
  }, 1000);
}

function stopInterval() {
  clearInterval(intervalIns);
}

// JS BOM cookies

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = 'expires=' + d.toUTCString();

  document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
}

function getCookie(cname) {
  // console.log(document.cookie);

  let name = cname + '=';

  let ca = document.cookie.split(';');

  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];

    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }

    if (c.indexOf(name) === 0) {
      return c.substring(name.length);
    }
  }

  return "";
}
