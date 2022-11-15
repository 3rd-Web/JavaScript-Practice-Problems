// Write a function called getSquaredElementsAtProperty. Given an object and a key, getSquaredElementsAtProperty
// returns an array containing all the squared elements of the array located at the given key.

let obj = {
  key: [2, 1, 5],
};

function getSquaredElementsAtProperty(obj, key) {
  // your code here

  let array = obj[key];
  let newArray = [];

  if (!obj[key] || typeof obj[key] === "string") {
    return [];
  }

  for (i = 0; i < array.length; i++) {
    newArray.push(array[i] * array[i]);
  }

  return newArray;
}

let output = getSquaredElementsAtProperty(obj, "key");
console.log(output); // --> [4, 1, 25]
