exports.JavascriptForLoops = () => {
  for (let i = 0; i < 9; i++) {
    if (i === 7) {
      console.log("Breaking the loop");
      break;
    }
    console.log(`Total Count: ${i}`);
  }

  const items = ["PC", "Laptop", "Keyboard", "Mouse", "Headphones"];

  for (let i = 0; i < items.length; i++) {
    console.log(`${items[i]}`);
  }

  const names = ["Renyel", "Ian", "Edmon", "Neri"];

  for (i = 0; i < names.length; i++) {
    console.log(names[i]);
  }

  //loops using key value pairs

  let students = {
    firstname: "Renyel Jay",
    lastname: "Sioc",
    course: "BSIT-NS-4A",
    age: 21,
  };

  // for in should be used in objects
  for (let info in students) {
    console.log(`${info} : ${students[info]}`);
  }

  const brands = ["Samsung", "Realme", "Redmi", "Oppo", "Vivo"];

  // for of loops should be used in arrays
  for (let brand of brands) {
    console.log(brand);
  }

  let count = 1;
  while (count < 10) {
    console.log(count);
    count++;
  }

  let num = 1;
  while (num < 10) {
    console.log(num);
    num++;

    if (num == 7) {
      console.log("break while loop");
      break;
    }
  }

  let num2 = 1;

  do {
    console.log(`pak u?`);
    num2++;
    if (num2 == 7) {
      console.log("breaking do loops");
      break;
    }
  } while (num2 < 10);

  const emptyArr = [];

  let num3 = 1;

  console.log(emptyArr);

  do {
    emptyArr.push(num3);
    ++num3
  } while (num3 < 10);

  console.log(emptyArr);
};
