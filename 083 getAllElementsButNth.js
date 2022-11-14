// Write a function called getAllElementsButNth. Given an array and an index, getAllElementsButNth returns an array with all the elements but the nth.

function getAllElementsButNth(array, n) {
  // Write your function here
  array.splice(n, n);
  return array;
}
let output = getAllElementsButNth(["a", "b", "c"], 1);
console.log(output); // --> ['a', 'c']
