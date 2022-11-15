// Write a function called getAllButLastElementOfProperty. Given an object and a key, getAllButLastElementOfProperty
// returns an array containing all but the last element of the array located at the given key.

let obj = {
  key: [1, 2, 3],
};
function getAllButLastElementOfProperty(obj, key) {
  // your code here
  if (!obj[key] || !Array.isArray(obj[key]) || obj[key].length < 1) {
    return [];
  }

  let array = obj[key];
  let removeElement = array.pop(array);

  return array;
}

let output = getAllButLastElementOfProperty(obj, "key");
console.log(output); // --> [1,2]
