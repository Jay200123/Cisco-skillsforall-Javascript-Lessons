let counter;
console.log(counter);

{
  counter = 1;
  {
    console.log(counter);
  }
}

counter = counter + 1;
console.log(counter);

const height = 200; // global variable
{
  let weight = 170; // local variable
  console.log("Height: " + height);
  console.log("Weight: " + weight);
}

console.log(height);
//console.log(weight);  // weight not defined since weight is declared inside a block and would be considered as a local instead of global variable compared to height which is declared globally
console.log("======================================================");
console.log("Using let do declare variables Sample #2");

let height1 = 300;
{
  let weight = 400;
  {
    let info = "Tall";
    console.log(height1);
    console.log(weight);
    console.log(info); // info variable is only available in this block since it was declared in this scope only.
  }
  {
    console.log(height);
    console.log(weight);
    // console.log(info); // info is not defined since info is declared locally on the first block.
  }
}

// console.log(weight); // weight is not defined since weight is declared locally instead of global.

newHeight = height1 + height;
console.log("New Height Value: " + newHeight);

console.log("======================================================");
console.log("Using var do declare variables Sample #3");

var height2 = 180; 
{
  var weight2 = 90;
  console.log(height2);
  console.log(weight2);
}
// var ignores ordinary program blocks, treating them as if they do not exist, that's why weight can be accessible outside the block.

console.log(weight2);
const total = height2 + weight2;
console.log(total);
