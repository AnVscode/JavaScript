// với object
const obj = {
  name: "An",
  age: 22,
  sex: "Nam",
};

// cách sử dụng destructuring
const { name, age, sex } = obj;
console.log(name, age, sex);

// nếu muốn đổi tên biến thì
const { name: userName, age: userAge, sex: userSex } = obj;
console.log(userName, userAge, userSex);

// với array
const arr = ["An", 22, "Nam"];
console.log(arr[0], arr[1], arr[2]);
