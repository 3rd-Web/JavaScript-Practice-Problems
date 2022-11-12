// Write a function called removeFromFront. Given an array, removeFromFront returns the given array with its first element removed.

function removeFromFront(arr) {
  // your code here
  arr.shift();
  return arr;
}

let output = removeFromFront([1, 2, 3]);
console.log(output); // --> [2, 3]
