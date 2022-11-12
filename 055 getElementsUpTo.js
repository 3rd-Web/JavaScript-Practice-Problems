// Write a function called getElementsUpTo. Given an array and a index, getElementsUpTo, returns
//  an array with all the elements up until, but not including, the element at the given index.

function getElementsUpTo(array, n) {
  // your code here
  return array.slice(0, n);
}

let output = getElementsUpTo(["a", "b", "c", "d", "e"], 3);
console.log(output); // --> ['a', 'b', 'c']
