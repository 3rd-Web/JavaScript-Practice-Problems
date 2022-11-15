// Write a function called getEvenElementsAtProperty. Given an object and a key, getEvenElementsAtProperty
// returns an array containing all the even elements of the array located at the given key.

let obj = {
  key: [1000, 11, 50, 17],
};

function getEvenElementsAtProperty(obj, key) {
  // your code here
  let array = obj[key];
  let newArray = [];

  if (!obj[key] || !Array.isArray(obj[key])) {
    return [];
  }

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      newArray.push(array[i]);
    }
  }

  return newArray;
}
let output = getEvenElementsAtProperty(obj, "key");
console.log(output); // --> [1000, 50]
