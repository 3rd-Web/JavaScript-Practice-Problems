// Write a function called getProductOfAllElementsAtProperty. Given an object and a key, getProductOfAllElementsAtProperty
// returns the product of all the elements in the array located at the given key.

let obj = {
  key: [1, 2, 3, 4],
};

function getProductOfAllElementsAtProperty(obj, key) {
  // your code here
  if (!obj[key] || typeof obj[key] != typeof [] || obj[key].length < 1) {
    return 0;
  }

  let arr = obj[key];
  let arrMultiply = 1;

  for (let i = 0; i < arr.length; i++) {
    arrMultiply *= arr[i];
  }

  return arrMultiply;
}
let output = getProductOfAllElementsAtProperty(obj, "key");
console.log(output); // --> 24
