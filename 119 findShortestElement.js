// Write a function called findShortestElement. Given an array, findShortestElement
// returns the shortest string within the given array.

function findShortestElement(arr) {
  // your code here
  if (arr.length < 1) {
    return "";
  } else {
    let shortestElement = arr.sort((a, b) => a.length - b.length)[0];
    return shortestElement;
  }
}

let output = findShortestElement(["a", "two", "three"]);
console.log(output); // --> 'a'
