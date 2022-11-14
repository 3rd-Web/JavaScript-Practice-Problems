// Write a function called getFirstElementOfProperty. Given an object and a key,
// getFirstElementOfProperty returns the first element of the array located at the given key.

// Write your function here

const getFirstElementOfProperty = (obj, key) => {
  if (!obj[key] || !Array.isArray(obj[key])) {
    return undefined;
  }

  return obj[key][0];
};

let obj = {
  key: [1, 2, 4],
};
let output = getFirstElementOfProperty(obj, "key");
console.log(output); // --> 1
