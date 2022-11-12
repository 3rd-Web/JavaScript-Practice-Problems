// Write a function called getLastElement. Given an array, getLastElement returns the last element of the given array.

function getLastElement(array) {
  // Add your code after this line
  let lastElement = array[array.length - 1];
  return lastElement;
}

let output = getLastElement([1, 2, 3, 4]);
console.log(output); // --> 4
