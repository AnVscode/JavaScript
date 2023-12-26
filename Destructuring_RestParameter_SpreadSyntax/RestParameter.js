// a là 1, b là 2, c là [3, 4, 5, 6, 7, 8, 9]
const handle = (a, b, ...c) => {
  return c;
};

const value = handle(1, 2, 3, 4, 5, 6, 7, 8, 9);

console.log(value);
