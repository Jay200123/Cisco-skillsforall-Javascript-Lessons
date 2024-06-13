exports.hoistingJS = () => {
  // hosting in javascript refers to . It searches for all variable declarations and moves them to the beginning of the range in which they were declared
  var height = 180;
  console.log(height);
  console.log(weight); // undefined instead of Reference Error
  var weight = 70;
  console.log(weight);
};

exports.letHoist = () => {
    //error since hoist only works on var declarations on variable;
    let height = 180;
    console.log(height);
    console.log(weight);
    let weight = 200;
    console.log(weight);
};
