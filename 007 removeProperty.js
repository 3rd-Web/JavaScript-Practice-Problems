// Write a function called removeProperty. Given an object and a key, removeProperty removes the given key from the given object.

function removeProperty(obj, key) {
  // your code here
  delete obj[key];
}

let obj = {
  name: "Sam",
  age: 20,
};

removeProperty(obj, "name");
console.log(obj.name); // --> undefined
