// নিচের sentence এ "sumit" শব্দটি কয়বার ব্যবহার হয়েছে? প্রথমবার "sumit" কত নাম্বার পজিশনে পাওয়া গেছে ?

const sentence =
  'Learn with Sumit is all about teaching web development skills and techniques in an efficient and practical manner. If you are just getting started in web development, Learn with Sumit has all the tools you need to learn the newest and most popular technologies to convert you from a no stack to full stack developer. Learn with Sumit also deep dives into advanced topics using the latest best practices for you seasoned web developers';

const matches = sentence.match(/sumit/gi);
const occurances = matches ? matches.length : 0;
// console.log(occurances);

let position = sentence.search(/sumit/i);
position = position >= 0 ? position : 'not found!';
// console.log(position);

/*
input : linearSearch(["a","b","c","d","c"],"a")
output : 2 or "not found!"
problem: implement linearSearch() function
*/

function linearSearch(arr, val) {
  const len = arr.length;

  for (let i = 0; i < len; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return 'not found!';
}
// console.log(linearSearch(['a', 'b', 'c', 'd', 'c'], 'b'));
// console.log(linearSearch(['a', 'b', 'c', 'd', 'c'], 'q'));

// কোনো Array থেকে কিভাবে সব থেকে বড় string খুজে বের করা যাবে এবং তার index নাম্বার?

function longestString(names) {
  let longestWord = '';
  for (Nam of names) {
    if (Nam.length > longestWord.length) {
      longestWord = Nam;
    }
  }
  return [longestWord, names.indexOf(longestWord)];
}

// console.log(
//   longestString([
//     'Abdullah Atif',
//     'Learn With Atif',
//     'Nishat',
//     'Rubaiya Jannat',
//     'Sabbir',
//   ])
// );

// ১-১০০ পর্যন্ত কোন সংখ্যা গুলো ৩, ৫ এবং ৩ ও ৫ উভয় সংখ্যা দ্বারা বিভাজ্য ?

function fizzBuzz(number) {
  for (let i = 1; i <= number; i++) {
    if (i % 15 === 0) {
      console.log(`${i} is FizzBuzz`);
    } else if (i % 3 == 0) {
      console.log(`${i} is Fizz`);
    } else if (i % 5 === 0) {
      console.log(`${i} is Buzz`);
    } else {
      // console.log(i);
    }
  }
}

// fizzBuzz(100);

// falsy values : false, undefined, null, "", NaN, 0
//  Array থেকে falsy value কিভাবে খুজে বের করা যায়?

const mixedArr = [
  'lws',
  undefined,
  'learn With Sumit ',
  false,
  '',
  ' apple ',
  40,
  'k',
  true,
  'Thanks all',
  NaN,
];

// const trueArr = mixedArr.filter(function (el) {
//   if (el) {
//     return true;
//   } else {
//     return false;
//   }
// });

const trueArr = mixedArr.filter(Boolean);
// console.log(trueArr);


//  object থেকে falsy value কিভাবে খুজে বের করা যায়?

const obj = {
  a: 'lws',
  b:  undefined,
  c:'learn With Sumit ',
  d:false,
  e:'',
  f:' apple ',
  g:40,
  h:'k',
  i:true,
  j:'Thanks all',
  k:NaN,
};

const trulyObject = function(obj){
  for(let i in obj){
    if (!obj[i]){
      delete obj[i];
    }
  }
  return obj;
}
console.log(trulyObject(obj));