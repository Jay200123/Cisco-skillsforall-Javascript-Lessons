exports.ArithmeticOperators = ()=>{
    const strings = +"123";
    const strings2 = +"abc";

    console.log(strings2);
    console.log(typeof(strings2));
    console.log(typeof(strings));

    const val1 = true;
    const val2 = false;

    // const result = val1 && val2; needs both value to be true
    // const result = val1 || val2; // only one value needs to be true

    const newresult = !val1; // flips the value
    console.log(newresult);

    // console.log(result);

    //module practice

    console.log( 2 * 3 + 1); // 7
    console.log( 2 ** 4);
    console.log(5 * 1);
    console.log( 8 ** 2 -  5 ** 2);

    console.log(4 * 5 == 20);
    console.log(6 * 5  == "30");
    console.log(-17 < 0);
    console.log(25 > 1);
    console.log(2 + 2 * 2 != 4);

    console.log(true || false);
    console.log(false || !false);
    console.log(false && false || true);
    console.log(true || false || false && true);

}