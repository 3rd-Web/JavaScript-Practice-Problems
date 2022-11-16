// Write a function called getElementOfArrayProperty. Given an object, a key, and a numerical index, getElementOfArrayProperty
// returns the value of the element at the given index of the array located within the given object at the given key.

function getElementOfArrayProperty(obj, key, index) {
  // your code here
  if (!obj[key]) {
    return undefined;
  }

  let array = obj[key][index];

  return array;
}

let obj = {
  key: ["Jamil", "Albrey"],
};
let output = getElementOfArrayProperty(obj, "key", 0);
console.log(output); // --> 'Jamil'
