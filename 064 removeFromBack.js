// Write a function called removeFromBack. Given an array, removeFromBack" returns the array with its last element removed.

function removeFromBack(arr) {
  // your code here
  arr.pop();
  return arr;
}

let output = removeFromBack([1, 2, 3]);
console.log(output); // --> [1, 2]
