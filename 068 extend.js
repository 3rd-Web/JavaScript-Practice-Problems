// Write a function called extend. Given 2 objects, extend adds the properties of the 2nd object to the first one.

let obj1 = {
  a: 1,
  b: 2,
};
let obj2 = {
  b: 4,
  c: 3,
};

function extend(obj1, obj2) {
  // your code here
  for (let key in obj2) {
    if (obj1[key]) {
      obj1[key];
    } else obj1[key] = obj2[key];
  }
  return obj1;
}

extend(obj1, obj2);

console.log(obj1); // --> {a: 1, b: 2, c: 3}
console.log(obj2); // --> {b: 4, c: 3}
