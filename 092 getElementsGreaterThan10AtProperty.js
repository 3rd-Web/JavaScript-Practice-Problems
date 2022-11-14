// Write a function called getElementsGreaterThan10AtProperty. Given an object and a key, getElementsGreaterThan10AtProperty
// returns an array containing the elements within the array, located at the given key, that are greater than 10.

// Write your function here

const getElementsGreaterThan10AtProperty = (obj, key) => {
  if (!obj[key] || obj[key].length == 0 || !Array.isArray(obj[key])) {
    return [];
  }

  let array = obj[key];
  let newArray = [];

  array.forEach((element) => {
    if (element > 10) {
      newArray.push(element);
    }
  });

  return newArray;
};

let obj = {
  key: [1, 20, 30],
};
let output = getElementsGreaterThan10AtProperty(obj, "key");
console.log(output); // --> [20, 30]
