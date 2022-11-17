// Write a function called findShortestWordAmongMixedElements. Given an array, findShortestWordAmongMixedElements
// returns the shortest string within the given array.

function findShortestWordAmongMixedElements(arr) {
  // your code here
  if (arr.length < 1) {
    return "";
  }

  let words = [];

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
      words.push(arr[i]);
    }
  }

  let shortestWord = words.sort((a, b) => a - b)[0];

  return shortestWord;
}
let output = findShortestWordAmongMixedElements([4, "two", 2, "three"]);
console.log(output); // --> 'two'
