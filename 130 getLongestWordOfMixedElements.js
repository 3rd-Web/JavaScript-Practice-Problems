// Write a function called getLongestWordOfMixedElements. Given an array of mixed types,
// getLongestWordOfMixedElements returns the longest string in the given array.

function getLongestWordOfMixedElements(arr) {
  // your code here
  if (arr.length < 1) {
    return "";
  }

  let getWords = [];

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
      getWords.push(arr[i]);
    }
  }

  let longestWord = getWords.sort((a, b) => b - a)[0];

  return longestWord;
}

let output = getLongestWordOfMixedElements([3, "word", 5, "up", 3, 1]);
console.log(output); // --> 'word'
