// Write a function called addToBack. Given an array and an element, addToBack returns the given array with the given element added to the end.

function addToBack(arr, element) {
  // your code here
  arr.push(element);
  return arr;
}

let output = addToBack([1, 2], 3);
console.log(output); // -> [1, 2, 3]
