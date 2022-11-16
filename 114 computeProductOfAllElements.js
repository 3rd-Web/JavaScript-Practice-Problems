// Write a function called computeProductOfAllElements. Given an array of numbers, computeProductOfAllElements
// returns the products of all the elements in the given array.

function computeProductOfAllElements(arr) {
  // your code here
  if (arr.length === 0) {
    return 0;
  }

  let sumMultiply = 1;

  for (let i = 0; i < arr.length; i++) {
    sumMultiply *= arr[i];
  }

  return sumMultiply;
}

let output = computeProductOfAllElements([2, 5, 6]);
console.log(output); // --> 60
