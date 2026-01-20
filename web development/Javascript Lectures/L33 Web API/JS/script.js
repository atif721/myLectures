// Web API validation

function validation() {
  const inputObj = document.getElementById('id1');

  if (inputObj.validity.rangeOverflow) {
    inputObj.setCustomValidity('Range Overflow error!');
  } else if (inputObj.validity.rangeUnderflow) {
    inputObj.setCustomValidity('Range Underflow error!');
  } else if (inputObj.validity.valueMissing) {
    inputObj.setCustomValidity('Value Missing error!');
  }

  if (!inputObj.checkValidity()) {
    document.getElementById('demo').innerHTML = inputObj.validationMessage;
  }
}

// Web API history

function back() {
  window.history.back();
}
function backTo(n) {
  window.history.go(n);
}
function forward() {
  window.history.forward();
}
function getHistory() {
  alert(window.history.length);
}

// Web API Storage
// local storage
function setLocalStorage(key, value) {
  localStorage.setItem(key, value);
}

function getLocalStorage(key) {
  alert(localStorage.getItem(key));
}

function removeLocalStorage(key) {
  localStorage.removeItem(key);
}

function clearLocalStorage() {
  localStorage.clear();
}

// session storage

function setSessionStorage(key, value) {
  sessionStorage.setItem(key, value);
}

function getSessionStorage(key) {
  alert(`${key} : ${sessionStorage.getItem(key)}`);
}

function removeSessionStorage(key) {
  sessionStorage.removeItem(key);
}

function getSessionKeyLength() {
  alert(`sessionStorage has ${sessionStorage.length} keys`);
}

function clearSessionStorage() {
  sessionStorage.clear();
}
