//Array is an object in javascript
//unlike many programming language, javascript array can accept any value
let students = [] // length  =0
let myStudents = [2, 3, 5, 5, "boy", 4.35, false]; // length =4
let theStudents = new Array(); // length 0;
let newStudents = new Array(2, 4, 5, 5); // length = 5
let oldStudents = new Array(10); // length = 10

//console.log(Array.isArray(oldStudents));

let sentence = "this is good."
words = sentence.split(" ");


for(let n = words.length; n >= 0; n--) {
    words[n] = words[n-1];
    //console.log(words[n]);
}



words[0] = "james";

let nums = [2, 3, 4, 2, 3, 2, 3, 4, 4];

function isEven(num) {
    return num % 2 == 0;
}

//print(nums.every(isEven))

function add(runningTotal, currentValue) {
    return runningTotal + currentValue;
}

//console.log(nums.reduce((a,b) => a + b))

let sampleWords = "this is good deal";
//console.log(sampleWords.split(" ").reduceRight((a, b) => a + b));

function increadeGrade(value) {
    return value += 5;
}

let grades = [34, 35, 78, 65, 45];

 function isEven(value) {
    return value % 2 == 0;
 }
 function isOld (value) {
    return value % 2 !== 0;
 }

 var words = ["recieve","deceive","percieve","deceit","concieve"];

 function contains(value) {
    if(value.indexOf('cie') > -1) {
        return true;
    }else return false;
 }

 console.log(words.filter(contains))


