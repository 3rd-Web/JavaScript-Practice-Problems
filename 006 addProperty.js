/*
Write a function called addProperty. Given an object, and a key, addProperty sets a new property on the given object with a value of true.
Then, the function must return the object.
*/

function addProperty(obj, key) {
  // your code here
  obj[key] = true;
  return obj;
}

let myObj = {};
addProperty(myObj, "myProperty");
console.log(myObj.myProperty); // --> true
