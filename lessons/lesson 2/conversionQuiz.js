exports.LiteralsConversion = () => {
  let b1 = true;
  let b2 = Boolean(true);

  console.log(`${b1} [${typeof b1}]`);
  console.log(`${b2} [${typeof b2}]`);

  let n1 = 100;
  let n2 = Number(100);

  console.log(`${n1} [${typeof n1}]`);
  console.log(`${n2} [${typeof n2}]`);

  let str1 = "Hi there";
  let str2 = String("Hello");

  console.log(`${str1} [${typeof str1}]`);
  console.log(`${str2} [${typeof str2}]`);

  let bigI = 12n;
  let bigI2 = BigInt(12);

  console.log(`${bigI} [${typeof bigI}]`);
  console.log(`${bigI2} [${typeof bigI2}]`);

  let un = undefined;
  console.log(`${un} : [${typeof un}]`);

  const str = "1234";
  console.log(str);
  const num = Number(str);
  console.log(num);
  const bigNum = BigInt(num);
  console.log(bigNum);
  const bool = Boolean(bigNum);
  console.log(bool);
};

exports.LiteralsConversionQuiz2 = ()=>{
  
  let str = "Renyel" + "Jay";
  console.log(`${str}  [${typeof(str)}]`);

  let num = 23 + 7;
  console.log(`${num} [${typeof(num)}]`);

  let bigNum = 12n + 12n;
  console.log(`${bigNum} [${typeof(bigNum)}]`);

  let bool = true + false;
  console.log(`${bool} [${typeof(bool)}]`);

  let un = undefined + undefined;
  console.log(`${un} [${typeof(un)}]`);
};

exports.LiteralsConversionQuiz3 = ()=>{
  let b1 = true + 100;
  console.log(`${b1} [${typeof(b1)}]`);

  // let b2 = true + 100n;
  // console.log(b2); //Type Error: Cannot mix BigInt and other types, use explicit conversions

  let b3 = true + "100";
  console.log(`${b3} [${typeof(b3)}]`);

  // let n1 = 100 + 200n;
  // console.log(n1);//Type Error: Cannot mix BigInt and other types, use explicit conversions

  let n2 = 100 + true;
  console.log(`${n2} [${typeof(n2)}]`);
  
  let n3 = 100 + "200"; 
  console.log(`${n3} [${typeof(n3)}]`);

  // let bi1 = 100n + 200;
  // console.log(bi1); //Type Error: Cannot mix BigInt and other types, use explicit conversions

  // let bi2 = 100n + true;
  // console.log(bi2); //Type Error: Cannot mix BigInt and other types, use explicit conversions

  let bi3 = 100n + "200";
  console.log(`${bi3} [${typeof(bi3)}]`);

  let s1 = "100" + 200;
  console.log(`${s1} [${typeof(s1)}]`);

  let s2 = "100" + 200n;
  console.log(`${s2} [${typeof(s2)}]`);

  let s3 = "100" + true;
  console.log(`${s3} [${typeof(s3)}]`);

  let s4 = "abc" + 100;
  console.log(`${s4} [${typeof(s4)}]`);

  let s5 = "abc" + 200n;
  console.log(`${s5} [${s5}]`);

  let s6  = "abc" + true;
  console.log(`${s6} [${typeof(s6)}]`);

  const str1 = 42 + +"1";
  console.log(str1);

};
