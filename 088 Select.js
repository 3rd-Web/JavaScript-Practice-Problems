// Write a function called select. Given an array and an object, select returns a new object
// whose properties must be on the given array and the given object as well.

// Write your function here
const select = (arr, obj) => {
  newObj = {};

  arr.forEach((element) => {
    if (obj[element]) {
      newObj[element] = obj[element];
    }
  });

  return newObj;
};

let arr = ["a", "c", "e"];
let obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
};
let output = select(arr, obj);
console.log(output); // --> { a: 1, c: 3 }
