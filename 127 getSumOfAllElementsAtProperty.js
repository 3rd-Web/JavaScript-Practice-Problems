// Write a function called getSumOfAllElementsAtProperty. Given an object and a key, getSumOfAllElementsAtProperty
// returns the sum of all the elements in the array located at the given key.

let obj = {
  key: [4, 1, 8],
};

function getSumOfAllElementsAtProperty(obj, key) {
  // your code here
  if (!obj[key]) {
    return 0;
  }

  let arr = obj[key];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}
let output = getSumOfAllElementsAtProperty(obj, "key");
console.log(output); // --> 13
