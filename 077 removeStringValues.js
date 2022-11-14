// Write a function called removeStringValues. Given an object, removeStringValues removes any properties whose values are strings.

let obj = {
  name: "Sam",
  age: 20,
};

function removeStringValues(obj) {
  // your code here
  for (let key in obj) {
    if (typeof obj[key] === "string") {
      delete obj[key];
    }
  }
  return obj;
}

removeStringValues(obj);
console.log(obj); // { age: 20 }
