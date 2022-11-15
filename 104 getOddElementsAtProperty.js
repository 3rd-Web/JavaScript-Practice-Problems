// Write a function called getOddElementsAtProperty. Given an object and a key, getOddElementsAtProperty
// returns an array containing all the odd elements of the array located at the given key.

let obj = {
  key: [1, 2, 3, 4, 5],
};

function getOddElementsAtProperty(obj, key) {
  // your code here
  let array = obj[key];
  let newArray = [];

  if (!obj[key] || !Array.isArray(obj[key])) {
    return [];
  }

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      newArray.push(array[i]);
    }
  }

  return newArray;
}

let output = getOddElementsAtProperty(obj, "key");
console.log(output); // --> [1, 3, 5]
