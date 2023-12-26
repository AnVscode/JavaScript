const obj = {
  name: "An",
  age: 22,
  ability: ["coding"],
};

// shallow copy (tạo ra một object mới, không thay đổi object cũ)
const cloneObj = { ...obj };
