// Write a function called getElementsLessThan100AtProperty. Given an object and a key, getElementsLessThan100AtProperty
// returns an array containing all the elements of the array located at the given key that are less than 100.

// Write your function here

const getElementsLessThan100AtProperty = (obj, key) => {
  if (!obj[key] || obj[key].length == 0 || !Array.isArray(obj[key])) {
    return [];
  }

  let array = obj[key];
  let newArr = [];

  array.forEach((element) => {
    if (element < 100) {
      newArr.push(element);
    }
  });

  return newArr;
};

let obj = {
  key: [1000, 20, 50, 500],
};
let output = getElementsLessThan100AtProperty(obj, "key");
console.log(output); // --> [20, 50]
