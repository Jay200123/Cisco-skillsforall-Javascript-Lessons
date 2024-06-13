exports.TypeConversion = () => {
  const str = String();
  const num = Number();
  const bool = Boolean();

  console.log(str);
  console.log(num);
  console.log(bool);

  const big1 = BigInt(23);
  console.log(big1);

  const num1 = 23;
  console.log("Old Data type: " + typeof num1);
  const newNum = String(num1);
  console.log(newNum);
  console.log("New Data type: " + typeof newNum);

  console.log("=====================");

  const num2 = "7";
  console.log("Old Data type: " + typeof num2);
  const newNum2 = Number(num2);
  console.log(newNum2);
  console.log("New Data type: " + typeof newNum2);

  let num3 = 0;
  num3 = 1;
  const newNum3 = Boolean(num3);
  console.log(newNum3);
};

exports.StringConversion = () => {
  let str = "text";
  let newStr = String(str);
  console.log(`${typeof str} : ${str}`);
  console.log(`${typeof newStr} : ${str}`);

  let num = 42;
  let strNum = String(num);
  console.log(`${typeof num} : ${num}`);
  console.log(`${typeof strNum} : ${num}`);

  let bool = true;
  const strBool = String(bool);
  console.log(`${typeof bool} : ${bool}`);
  console.log(`${typeof strBool} : ${bool}`);

  let bigNum = 14n;
  let StrBig = String(bigNum);
  console.log(`${typeof bigNum} : ${bigNum}`);
  console.log(`${typeof StrBig} : ${bigNum}`);

  let un = undefined;
  let strUn = String(un);
  console.log(`${typeof un} : ${un}`);
  console.log(`${typeof strUn} : ${un}`);
};

exports.NumberConversion = () => {
  console.log(Number(42));
  console.log(Number("0x11"));
  console.log(Number("0x10"));
  console.log(Number("0x9"));
  console.log(Number("0x8"));
  console.log(Number("0x6"));
  console.log(Number("12e3"));
  console.log(Number("test"));
  console.log(Number("test" + 12));
  console.log(Number(true));
  console.log(Number(false));
};

exports.BooleanConversion = () => {
  console.log(Boolean("text")); //returns true
  console.log(Boolean("")); //returns false since the value is an empty string

  console.log(Boolean(1));
  console.log(Boolean(false));

  console.log(Boolean(undefined));
  console.log(Boolean(null));
  console.log(Boolean(NaN));
};

exports.ImplicitConversion = ()=>{
  const str = 42 + "1"; 
  console.log(str);
  console.log(typeof(str));

  const str2 = 23 + "7";
  console.log(str2);
  console.log(typeof(str));
}
