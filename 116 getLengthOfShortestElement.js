// Write a function called getLengthOfShortestElement. Given an array, getLengthOfShortestElement
// returns the length of the shortest string in the given array.

function getLengthOfShortestElement(arr) {
  // your code here
  if (arr.length === 0) {
    return 0;
  }

  let shortestWord = arr.sort((a, b) => a.length - b.length)[0];

  return shortestWord.length;
}
let output = getLengthOfShortestElement(["one", "two", "three"]);
console.log(output); // --> 3
