// Write a function called getLengthOfLongestElement. Given an array, getLengthOfLongestElement
// returns the length of the longest string in the given array.

function getLengthOfLongestElement(arr) {
  // Your code here
  // Your code here
  if (arr.length === 0) {
    return 0;
  }

  let longestWord = [];

  arr.forEach((word) => {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  });

  return longestWord.length;
}

let output = getLengthOfLongestElement([
  "one",
  "two",
  "three",
  "ten",
  "fifteen",
]);
console.log(output); // --> 7
