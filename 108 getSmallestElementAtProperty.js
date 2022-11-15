// Write a function called getSmallestElementAtProperty. Given an object and a key, getSmallestElementAtProperty
// returns the smallest element in the array located at the given key.

let obj = {
  key: [2, 1, 5],
};
function getSmallestElementAtProperty(obj, key) {
  // your code here
  if (!obj[key] || !Array.isArray(obj[key]) || obj[key].length < 1) {
    return [];
  }

  let array = obj[key];
  let min = Math.min(...array);

  return min;
}

let output = getSmallestElementAtProperty(obj, "key");
console.log(output); // --> 1
