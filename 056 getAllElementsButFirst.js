// Write a function called getAllElementsButFirst. Given an array, getAllElementsButFirst returns an array with all the elements but not the first.

function getAllElementsButFirst(array) {
  // your code here
  array.shift();
  return array;
}

let input = [1, 2, 3, 4];
let output = getAllElementsButFirst(input);
console.log(output); // --> [2, 3, 4]
