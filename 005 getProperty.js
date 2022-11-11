/*
Write a function called getProperty. Given an object and a key, getProperty returns the value of the property at the given key.
*/

function getProperty(obj, key) {
  // your code here
  return obj[key];
}

let car = {
  model: "Toyota",
};
let output = getProperty(car, "model");
console.log(output); // --> 'Toyota'
