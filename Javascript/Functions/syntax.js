function hello() {      //function definition
    console.log("hello world");  // do something
}
hello();           //function callling

function printName() {
    console.log("Sudha Palyal");
    console.log("Sneha Bisht");
}
printName();

//print numbers from 1 t0 5
function print1to5() {
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
}
print1to5();

//whether a person can give vote or not
let age = 94;
function verifyAge() {
    if (age < 18) {
        console.log("Person can't give vote");
    }
    else {
        console.log("Person can give vote");
    }
}
verifyAge();

//print a poem using function
function printPoem() {
    console.log("Twinkle Twinkle little star");
    console.log("How I wonder what you are");
    console.log("Up above the world so high");
    console.log("Like a diamond in the sky");
}
printPoem();

//create a function to roll a dice and always display the value of the dice(1 to 6).
let random = Math.floor(Math.random() * 6) + 1;
for (let i = 1; i <= 6; i++) {
    console.log(i);
}
function diceNumber() {
    console.log("The obtained number on dice is", random);
}
diceNumber();

//Function with arguments

function printInfo(name, age) {
    console.log(`${name}'s age is ${age}.`);
}
printInfo("Sudha", 21);

//function that gives average of three numbers

function avg(a, b, c) {
    console.log(`The average of ${a},${b} and ${c} is`, (a + b + c) / 3);
}
avg(3, 3, 3);

//function that prints the table of a number

function printTable(n) {
    for (let i = 1; i <= 10; i++) {
        console.log(n * i);
    }
}
printTable(1789);

//return keyword

function sum(a, b) {
    return a + b;
}
let s = sum(3, 4);
console.log(s);//console.log(sum(3,4));

//A function that returns the sum of numbers from one to n.
function sumofNum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum = sum + i;
    }
    return sum;
}
let S = sumofNum(10);
console.log(S);

//A function that returns the concatenation of all strings in an array.

let arr = ["hi", "how", "are", "you", "?"];

function conCat(arr){
    let result = "";

    for(let i = 0; i < arr.length; i++){
        result += arr[i];
    }
    return result;
}
let r = conCat(arr);
console.log(r);




