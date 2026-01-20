// ------- DOM Form ---------

// function validateForm() {
//   const form = document.forms['myForm'];
//   const value = form['fname'].value;
//   //   console.log(form['fname'].value);

//   if (value === '') {
//     alert('Name field is empty');
//     return false;
//   }
// }

function styling() {
  const demo = document.getElementById('demo');
  const div = document.getElementById('divtag');
  demo.style.color = 'BLUE';
  demo.style.fontWeight = 'bold';
  demo.style.fontSize = '50px';
  div.style.backgroundColor = 'orange';
  div.style.width = '225px';
  div.style.textAlign = 'center';
}

function myMove() {
  const animate = document.getElementById('animate');
  let pos = 0;

  const inter = setInterval(frame, 10);

  function frame() {
    if (pos < 350) {
      pos++;
      animate.style.top = pos + 'px';
      animate.style.left = pos + 'px';
    } else {
      clearInterval(inter);
    }
  }
}
