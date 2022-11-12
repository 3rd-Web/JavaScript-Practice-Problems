// Write a function called getElementsAfter. Given an array and an index, getElementsAfter returns a new array with all the elements after (but not including) the given index.

function getElementsAfter(array, n) {
  // your code here
  array.slice(n);
  return array.splice(n + 1);
}

let output = getElementsAfter(["a", "b", "c", "d", "e"], 2);
console.log(output); // --> ['d', 'e']
