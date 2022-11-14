// Write a function called getLastElementOfProperty. Given an object and a key, getLastElementOfProperty
// eturns the last element of an array located at the given key.

// Write your function here

const getLastElementOfProperty = (obj, key) => {
  if (!obj[key]) {
    return undefined;
  }

  let array = obj[key];
  let lastElement = array[array.length - 1];

  return lastElement;
};

let obj = {
  key: [1, 2, 5],
};
let output = getLastElementOfProperty(obj, "key");
console.log(output); // --> 5
