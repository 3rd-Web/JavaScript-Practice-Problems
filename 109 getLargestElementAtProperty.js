// Write a function called getLargestElementAtProperty. Given an object and a key, getLargestElementAtProperty
// returns the largest element in the array located at the given key.

let obj = {
  key: [1, 2, 4],
};
function getLargestElementAtProperty(obj, key) {
  // your code here
  if (!obj[key] || !Array.isArray(obj[key]) || obj[key].length < 1) {
    return [];
  }
  let array = obj[key];
  let max = Math.max(...array);

  return max;
}
let output = getLargestElementAtProperty(obj, "key");
console.log(output); // --> 4
