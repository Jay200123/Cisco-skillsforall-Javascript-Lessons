"use strict";

var testName = "Jay";
var testName = "Renyel"; //var lets you redeclare the variable

let height = 180; // compared to var, let is used to declared a variable once, and you can only modify and reinitialize its value and cannot be redeclared,

let newHeight = height * 0.3;
console.log(newHeight);

const numString = "23";
console.log(typeof numString);

const toNumber = Number(numString);
console.log(toNumber);

let testNumber = 180;
console.log(typeof testNumber);

let steps = 100;
console.log(`steps is ${steps}`);
steps = 120;
console.log(`steps is ${steps}`);
steps = steps + 200;
console.log(steps);

let greet = "Hi there!";
let counter = 100;

console.log(greet);
greet = "Hello there!";
console.log(greet);

greet = greet + counter;
console.log(greet);
console.log(typeof greet);


const msg = "Greetings Stranger!"; //Constants are also used to store certain values, but once values have been entered into them during initialization, they can no longer be modified.

// const msg = "Hello there!";  will give an error since msg is a constant 
// msg = "Lol"; Type error since msg is a constant variable
console.log(msg); 
