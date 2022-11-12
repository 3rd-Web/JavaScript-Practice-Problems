// Write a function called joinArrays. Given 2 arrays, joinArrays returns an array with the elements of arr1, followed by the elements of arr2 in order.

function joinArrays(arr1, arr2) {
  // your code here
  return arr1.concat(arr2);
}

let output = joinArrays([1, 2], [3, 4]);
console.log(output); // --> [1, 2, 3, 4]
