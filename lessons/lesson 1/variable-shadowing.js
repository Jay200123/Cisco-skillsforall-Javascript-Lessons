exports.letShadow = () => {
  let counter = 100;
  console.log("Global Counter: " + counter);
  {
    let counter = 200;
    console.log(counter);
  }
  console.log("New global counter variable:" + counter);
};

var newCounter = 300;
exports.testCounter = () => {
  var newCounter = 200;
  console.log(newCounter);
};

exports.shadowCounter = () => {
  console.log("=================");
  let counter = 100;
  console.log(counter);
  {
    let counter = 200;
    console.log(counter);
  }
  console.log(counter);
};

exports.varShadow = () => {
  console.log("Var JS shadowing");
  var newCounter = 100;
  console.log(newCounter);
  {
    var newCounter = 300;
    console.log(newCounter);
  }
  console.log(newCounter);
};
