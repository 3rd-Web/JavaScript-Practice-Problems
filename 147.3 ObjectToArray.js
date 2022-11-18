// Write a function called convertObjectToList that converts a literal object into an array of arryas, like this:

function convertObjectToList(obj) {
  // your code here
  return Object.entries(obj);
}

let output = convertObjectToList({ name: "Holly", age: 35, role: "producer" });
console.log(output); // [['name', 'Holly'], ['age', 35], ['role', 'producer']]
