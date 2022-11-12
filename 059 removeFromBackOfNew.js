// Write a function called removeFromBackOfNew. Given an array, removeFromBackOfNew
// returns a new array containing all but the last element of the given array.

function removeFromBackOfNew(arr) {
  // your code here
  arr.pop();
  return arr;
}

let arr = [1, 2, 3];
let output = removeFromBackOfNew(arr);
console.log(output); // --> [1, 2]
console.log(arr); // --> [1, 2, 3]
