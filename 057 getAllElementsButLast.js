// Write a function called getAllElementsButLast. Given an array, getAllElementsButLast returns an array with all the elements but the last.

function getAllElementsButLast(array) {
  // your code here
  array.pop();
  return array;
}

let input = [1, 2, 3, 4];
let output = getAllElementsButLast(input);
console.log(output); // --> [1, 2 , 3]
