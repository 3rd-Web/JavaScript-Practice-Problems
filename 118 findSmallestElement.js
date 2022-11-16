// Write a function called findSmallestElement. Given an array of numbers, findSmallestElement
// returns the smallest number within the given array.

function findSmallestElement(arr) {
  // your code here
  if (arr.length < 1) {
    return 0;
  }

  let smallestElement = arr.sort((a, b) => a - b)[0];

  return smallestElement;
}

let output = findSmallestElement([4, 1, 9, 10]);
console.log(output); // --> 1
