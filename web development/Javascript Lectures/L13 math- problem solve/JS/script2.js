console.clear();

// Problem---1 prints (1-6) randomly
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// console.log(getRndInteger(1, 6));


// Problem---2 ordering alphabetically

const students = ["Atif", "Nishat", "Soniya", "Sabbir", "Mahfuz", "Evu"];
// console.log(students.sort());

// Problem ---3 how to sort roll numbers in a class

const studentId = [51,41,79,80,52,53,59,60,66,65,78,48,49];

// console.log(studentId.sort(
//     function(a, b) {
//         return a - b;
//     }
// ));

// Problem --- 4 how to find leap year

function isLeapYear(year){
    if((year % 400 === 0) || ((year % 4 === 0 ) && (year % 100 !== 0))) {
        console.log(`${year} is a leap year`);
    } else {
        console.log(`${year} is not a leap year`);
    }
}

// isLeapYear(2024);
// isLeapYear(1999);

const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
function countVowels(sentence) {
    let count = 0;
    const letters = Array.from(sentence);

    letters.forEach(function(value){
        if(vowels.includes(value)){
            // console.log(value);
            count++;
        }
    })
    return count;
}

// console.log(countVowels("I love Bangladesh. I am Atif"));

// Problem --- 5 how to find duplicate or unique elements in array

const numbers = [10, 41, 15, 77, 10, 6, 6, 5, 5, 15, 20, 51,2];
numbers.sort(function(a,b){
    return a - b;
});

const duplicate = numbers.filter(function(value, index, array){
    return array.indexOf(value) !== index
});

const unique = numbers.filter(function(value, index, array){
    return array.indexOf(value) === index
});

console.log(duplicate);
console.log(unique);