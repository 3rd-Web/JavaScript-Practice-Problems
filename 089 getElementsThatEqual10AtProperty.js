// Write a function called getElementsThatEqual10AtProperty. Given an object and a key, getElementsThatEqual10AtProperty
// returns an array containing all the elements of the array located at the given key that are equal to ten.

// Write your function here

const getElementsThatEqual10AtProperty = (obj, key) => {
  if (!obj[key] || obj[key].length == 0 || !Array.isArray(obj[key])) {
    return [];
  }

  let array = obj[key];
  let newArray = [];

  array.forEach((element) => {
    if (element === 10) {
      newArray.push(element);
    }
  });

  return newArray;
};

let obj = {
  key: [1000, 10, 50, 10],
};
let output = getElementsThatEqual10AtProperty(obj, "key");
console.log(output); // --> [10, 10]
