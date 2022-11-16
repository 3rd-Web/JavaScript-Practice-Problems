// Write a function called getLongestElement. Given an array, getLongestElement
// returns the longest string in the given array.

function getLongestElement(arr) {
  // your code here
  if (arr.length < 1) {
    return "";
  }

  const longestElement = arr.sort((a, b) => b.length - a.length)[0];

  return longestElement;
}
let output = getLongestElement(["one", "two", "three"]);
console.log(output); // --> 'three'
