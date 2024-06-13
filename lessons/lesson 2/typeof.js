exports.typeofLessons = () => {
  let year = 1990;
  console.log(typeof year);
  console.log(typeof 1991);

  let name = "Alice";
  console.log(typeof name);
  console.log(typeof "Bob!");

  let typeOfYear = typeof year;
  console.log(typeOfYear);
  console.log(typeof typeOfYear);
};

exports.primitiveBooleanJS = () => {
  let isDataValid = true;
  let isStringTooLong = false;
  let isGameOver = false;
  continueLoop = true;

  console.log(false);
  console.log(typeof false);
  console.log(isDataValid);
  console.log(typeof isDataValid);
};

exports.primitiveNumberJS = () => {
  const num1 = 23.99999;
  const newNum = num1.toFixed(0);
  console.log(newNum);

  const year = 1991;
  let delayInSeconds = 0.00016;
  let area = 16 * 3.14;
  console.log("Area: " + area);
  let halfArea = area / 2;
  console.log("Half Area: " + halfArea);

  let a = 10;
  let b = 0x10;
  let c = 0o10;
  let d = 0b10;

  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);

  let x = 9e3;
  let y = 123e-5;

  console.log(x);
  console.log(y);

  let z = 1 / 0;
  let v = -Infinity;

  console.log(z);
  console.log(v);
  console.log(typeof z);
  console.log(typeof v);

  let s = "1000";
  console.log(typeof s);
  let n = s * 10;
  console.log(n);
  console.log(typeof n);

  let testNum = 1n;
  console.log(typeof testNum);

  let big = 1234567890000000000000n;
  let big2 = 1n;

  console.log(big);
  console.log(typeof big);

  console.log(big2);
  console.log(10n / 2n);
};

exports.primitiveStringsJS = () => {
  let country = "Malawi";
  let continent = "Africa";

  console.log(country);
  console.log(typeof country);

  console.log(continent);
  console.log(typeof country);

  let msg1 = 'Hi there "there is a double qoute in me" ';
  console.log(msg1);

  let msg2 =
    'The new "Low Pressure Area" is now in the philippines area of responsibility';
  console.log(msg2);

  const msg3 = 'Hi there \"Im Renyel Jay Sioc\" from BSIT-NS-4A';
  console.log(msg3);

  let value = "50" * "50"; //js interpreter will convert them into numbers once an arithmetic operation was executed;
  let value2 = "50" + "150"; // addition has an exception, where instead of converting them into numbers, javascript will combine them instead.

  console.log(value);
  console.log(value2);

  const strInterpolation = `${country} is located at ${continent}.`;
  console.log(strInterpolation);
  
  console.time();
  console.timeEnd();

  const newName = "Renyel Jay Sioc";
  console.log(newName.charAt(7));
  console.log(newName.length);
  console.log(newName.charAt(0));
  console.log(newName.slice(0, 6));
  console.log(newName.split(" "));

  const hello = "Hello World";
  console.log(hello.slice(0, 5));
  console.log(hello.split(' '));

};

exports.NullJS =()=>{
  let newNum;
  console.log(newNum);

  let startNum = null;
  console.log(startNum);

  startNum = 20 + 30;
  console.log(startNum);
}
