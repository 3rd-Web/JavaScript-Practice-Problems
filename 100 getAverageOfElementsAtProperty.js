// Write a function called getAverageOfElementsAtProperty. Given an object and a key, getAverageOfElementsAtProperty
// returns the average of all the elements in the array located at the given key.

function getAverageOfElementsAtProperty(obj, key) {
  // your code here
  if (!obj[key] || !Array.isArray(obj[key]) || obj[key].length == 0) {
    return 0;
  }

  let array = obj[key];
  let count = 0;

  array.forEach((element) => {
    count = count + element;
  });

  let avg = count / array.length;

  return avg;
}

let obj = {
  key: [1, 2, 3],
};
let output = getAverageOfElementsAtProperty(obj, "key");
console.log(output); // --> 2
