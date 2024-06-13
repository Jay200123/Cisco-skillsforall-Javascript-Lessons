function helloMessage() {
  console.log("Hello there!");
}

helloMessage();

const num1 = 23;
const num2 = 7;

function Addition(a, b) {
  const total = num1 + num2;
  return total;
}

const add = Addition(num1, num2);
console.log(add);

const isCondition = true;

function decideMessage(condition) {
  if (condition) {
    console.log("Condition is True.");
  } else {
    console.log("Condition is False.");
  }
}

const decide = decideMessage(isCondition);

var globalMsg = "Hello Im global!";

function testFunction(){
  var localMsg = "Hello im local";
  console.log("Testing Function!");
  console.log(globalMsg);
  console.log(localMsg);
};

console.log(globalMsg);
// console.log(localMsg); trying to call a local variable from a function would result in error
testFunction();
