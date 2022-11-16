// Write a function called getLargestElement. Given an array, getLargestElement
// returns the largest number in the given array.

function getLargestElement(arr) {
  // your code here
  if (arr.length < 1) {
    return 0;
  } else {
    let largestElement = arr.sort((a, b) => b - a)[0];
    return largestElement;
  }
}

let output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;
