// Write a function called getEvenLengthWordsAtProperty. Given an object and a key, getEvenLengthWordsAtProperty
// returns an array containing all the even length word elements of the array located at the given key.

let obj = {
  key: ["a", "long", "game"],
};
function getEvenLengthWordsAtProperty(obj, key) {
  // your code here
  if (!obj[key]) {
    return [];
  }

  let array = obj[key];
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i].length % 2 === 0) {
      newArray.push(array[i]);
    }
  }

  return newArray;
}

let output = getEvenLengthWordsAtProperty(obj, "key");
console.log(output); // --> ['long', 'game']
