// Write a function called listAllValues which returns an array of all the input object's values.

function listAllValues(obj) {
  // your code here
  return Object.values(obj);
}

let output = listAllValues({ name: "Krysten", age: 33, hasPets: false });
console.log(output); // ['Krysten', 33, false]
