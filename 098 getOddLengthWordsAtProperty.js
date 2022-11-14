// Write a function called getOddLengthWordsAtProperty. Given an object and a key, getOddLengthWordsAtProperty
// returns an array containing all the odd length word elements of the array located at the given key.

// Write your function here

const getOddLengthWordsAtProperty = (obj, key) => {
  if (!obj[key] || !Array.isArray(obj[key]) || obj[key].length == 0) {
    return [];
  }

  let array = obj[key];
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i].length % 2 !== 0) {
      newArray.push(array[i]);
    }
  }

  return newArray;
};

let obj = {
  key: ["It", "has", "some", "words"],
};
let output = getOddLengthWordsAtProperty(obj, "key");
console.log(output); // --> ['has', 'words']
