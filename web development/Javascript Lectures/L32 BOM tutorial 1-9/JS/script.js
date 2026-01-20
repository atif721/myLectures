//  --------- JS BOM Window ---------
let myWindow;
// width.innerHTML = `Window width is : ${window.innerWidth}`;
// height.innerHTML = `Window inner height is : ${window.innerHeight}`;
function openWindow() {
  myWindow = window.open('https://facebook.com', '');
}

function closeWindow() {
  myWindow.close();
}

// --------- JS BOM Screen ----------
const width = document.getElementById('width');
const height = document.getElementById('height');
const availWidth = document.getElementById('availWidth');
const availHeight = document.getElementById('availHeight');
const colorDepth = document.getElementById('colorDepth');
const pixelDepth = document.getElementById('pixelDepth');
width.innerHTML = `Screen width is : ${screen.width}`;
height.innerHTML = `Screen height is : ${screen.height}`;
availWidth.innerHTML = `Screen availWidth is : ${screen.availWidth}`;
availHeight.innerHTML = `Screen availHeight is : ${screen.availHeight}`;
colorDepth.innerHTML = `Screen colorDepth is : ${screen.colorDepth}`;
pixelDepth.innerHTML = `Screen pixelDepth is : ${screen.pixelDepth}`;

// ---------- JS BOM Location -------------
const href = document.getElementById('href');
const hostname = document.getElementById('hostname');
const pathname = document.getElementById('pathname');
const protocol = document.getElementById('protocol');
const port = document.getElementById('port');

href.innerHTML = `Window href : ${location.href}`;
hostname.innerHTML = `Window hostname : ${location.hostname}`;
pathname.innerHTML = `Window pathname : ${location.pathname}`;
protocol.innerHTML = `Window protocol : ${location.protocol}`;
port.innerHTML = `Window port : ${location.port}`;

function loadW3s() {
  window.location.assign('https://w3schools.com');
}

// JS BOM history

function goBack() {
  window.history.back();
}
function goForward() {
  window.history.forward();
}
