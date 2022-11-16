// Write a function called computeSumOfAllElements. Given an array of numbers, computeSumOfAllElements
// returns the sum of all the elements in the given array.

function computeSumOfAllElements(arr) {
  // your code here
  let sumAdd = 0;

  for (let i = 0; i < arr.length; i++) {
    sumAdd += arr[i];
  }

  return sumAdd;
}

let output = computeSumOfAllElements([1, 2, 3]);
console.log(output); // --> 6
