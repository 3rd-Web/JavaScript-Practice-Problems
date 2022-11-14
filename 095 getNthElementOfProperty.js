// Write a function called getNthElementOfProperty. Given an object and a key, getNthElementOfProperty
// returns the nth element of an array located at the given key.

// Write your function here

const getNthElementOfProperty = (obj, key, n) => {
  if (!obj[key] || !Array.isArray(obj[key]) || n >= obj[key].length) {
    return undefined;
  }

  return obj[key][n];
};

let obj = {
  key: [1, 2, 6],
};
let output = getNthElementOfProperty(obj, "key", 1);
console.log(output); // --> 2
