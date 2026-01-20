function changeText(title) {
  //const title = document.querySelector('#title');
  title.innerHTML = 'Change by this with function';
}

// const button = document.querySelector('#button');
// button.onclick = function () {
//   console.log('Atif');
// };

// const button2 = document.querySelector('#button2');
// button2.addEventListener('click', function () {
//   button2.innerHTML = 'HI ATIF';
//   button2.style.width = '300px';
// });

// button2.addEventListener('click', function () {
//   button2.style.height = '100px';
// });

// document.querySelector('#div1').addEventListener(
//   'click',
//   function () {
//     console.log('Hello Div');
//   },
//   true
// );

// document.querySelector('#btn1').addEventListener(
//   'click',
//   function () {
//     console.log('Hello button');
//   },
//   true
// );

// const h1demo = document.getElementById('h1demo');
// const way1 = h1demo.innerHTML;
// const way2 = h1demo.firstChild.nodeValue;
// const way3 = h1demo.childNodes[0].nodeValue;
// console.log(`Way 1 ${way1}`);
// console.log(`Way 2 ${way2}`);
// console.log(`Way 3 ${way3}`);

// --------- DOM NODE ----------

const para = document.createElement('p');
const node = document.createTextNode('Hello World');
para.appendChild(node);

const element2 = document.getElementById('div2');
element2.appendChild(para);

const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');
element2.insertBefore(para, p1);

element2.removeChild(p2); // removing elements
// element2.replaceChild(p1, para); // replacing element

 