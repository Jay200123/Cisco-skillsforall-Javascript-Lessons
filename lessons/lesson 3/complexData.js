exports.ComplexDataTypes = () => {
  const testObj = {
    fname: "Renyel",
    lname: "Sioc",
  };

  console.log(testObj);
  console.log(testObj.fname);
  console.log(testObj.lname);
  console.log(typeof testObj);

  const { fname, lname } = testObj;
  console.log(fname);
  console.log(lname);

  let testObj2 = {
    num: 600,
    str: "text",
    bool: true,
  };

  let arr1 = [
    {
      fname: "Renyel Jay",
      lname: "Sioc",
      age: 22,
    },
    {
      fname: "Iien",
      lname: "Abadilla",
      age: 22,
    },
  ];

  const newArr = arr1?.map((data) =>
    console.log(`Users: ${data?.fname} ${data?.lname}`)
  );
};

exports.ComplexDataType2 = () => {
  let user1 = {
    name: "Renyel Jay",
    lastname: "Sioc",
    age: 22,
    email: "renyeljay.sioc@gmail.com",
  };

  console.log(
    `User ${user1.name} ${user1.lastname} ${user1.age} years old, with email address: ${user1.email}`
  );

  let user2 = {
    name: "Iien",
    lastname: "Abadilla",
    age: 22,
    email: "iien.abadilla@gmail.com",
  };

  //   console.log(user2.age);
  //   user2.age = 23;

  //   delete user2.lastname;
  //   user2.lastname = "Sioc";

  console.log(
    `User ${user2.name} ${user2.lastname} ${user2.age} years old, with email address: ${user2.email}`
  );
};

exports.ArraysComplexData = () => {
  const items = [
    "Laptop",
    "Desktop Computer",
    "Mouse",
    "Keyboard",
    "Headphones",
    21,
    true,
  ];

  console.log(items[0]);
  console.log(items[1]);
  console.log(items[2]);
  console.log(items[3]);
  console.log(typeof items[4]);
  console.log(typeof items[5]);
  console.log(typeof items[6]);

  const animals = [];

  animals[0] = "Cat";
  animals[1] = "Dog";

  console.log(animals);
};

exports.NestedArrays = () => {
  let names = [
    ["Renyel", "Ian", "Edmon", "Neri"],
    ["Jhofel", "Ashong", "Arnel"],
    ["Iien", "Sai Sai", "Laica"],
  ];

  console.log(names);

  //first nested arrays
  console.log(names[0][1]);
  console.log(names[0][2]);

  //second nested arrays
  console.log(names[1][0]);
  console.log(names[1][1]);

  //third nested arrays
  console.log(names[2][0]);
  console.log(names[2][1]);
};

exports.SecondArrayData = () => {
  let days = [];
  console.log(days[0]);
  days[0] = "Sunday";
  console.log(days[0]);

  let emptyData = [];
  emptyData[0] = "Test";
  console.log(emptyData);

  const users = [
    {
      name: "Calvin",
      surname: "Hart",
      age: 66,
      email: "CalvinMHart@teleworm.us",
    },
    {
      name: "Mateus",
      surname: "Pinto",
      age: 21,
      email: "MateusPinto@dayrep.com",
    },
    {
      name: "Irene",
      surname: "Purnell",
      age: 32,
      email: "IreneHPurnell@rhyta.com",
    },
  ];

  console.log(users[0].name);
  console.log(users[1].name);

  const test = users.forEach((u) => {
    const { name, age } = u;

    console.log(`The name for each users is ${name} age ${age}`);
  });
};

exports.InstanceData = ()=>{

  const item1 = ["monitor","system unit","keyboard", "mouse", "headset"];
  console.log(typeof(item1));

  const item2 = {
    name:"laptop",
    price: 299.99,
  };

  console.log(typeof(item2));

  console.log((item1)instanceof Array);
  console.log((item2)instanceof Array);
};

exports.ArrayDataLength = ()=>{

  const names = ["Olivia", "Emma", "Mateo", "Samuel"];
  console.log(`Data Length: ${names.length}`);

  names[4] = "Daniel";
  console.log(`Data Length: ${names.length}`);
  console.log(names[4]);

  // indexOf
  console.log(names.indexOf("Daniel"));
  console.log(names.indexOf("Mateo")); 
  console.log(names.indexOf("Emma"));
  console.log(names.indexOf("Olivia"));

  //arrays push
  const newNames = ["Jack", "Lucas", "Mark", "Steven"];
  console.log(newNames);
  console.log(newNames.length) // old array length
  newNames.push("Amelia"); // "push" array method push the name "Amelia" at the end of the array
  console.log(newNames);
  console.log(newNames.length) // new array length

  // arrays unshift
  newNames.unshift("Jay"); // adds new item in the start of the array
  console.log(newNames);
  console.log(newNames.length);

  // arrays pop // removes the last item in the end of an array
  newNames.pop();
  console.log(newNames.length);
  console.log(newNames);

  // arrays shift same as pop but instead of the last item in the array, the first item is being removed by shift method
  newNames.shift();
  console.log(newNames.length);
  console.log(newNames);

  // array reverse  this method is used for reversing the order of items in an array
  newNames.reverse(); 
  console.log(newNames);

  // slice arrays  method allows you to create a new array from selected elements of the original array. 
  const items3 = ["laptop", "monitor", "system unit", "keyboard", "mouse", "headset"];
  console.log(items3);
  const newItem3 = items3.slice(1, 5);
  console.log(newItem3);

  const arr1 = ["Renyel Jay", "Ian Mark", "Edmon", "Neri"];
  const arr2 = ["Jhofel", "Arnel", "Wayle", "Ashong"];
  const arr3 = ["Iien", "Sai", "Laica"];

  const combinedNames = arr1.concat(arr2, arr3);
  console.log(combinedNames);
}
