// Write a function called computeAverageLengthOfWords. Given two words, computeAverageLengthOfWords returns the average of their lengths.

// Write your function here
const computeAverageLengthOfWords = (word1, word2) => {
  return (word1.length + word2.length) / 2;
};

let output = computeAverageLengthOfWords("code", "programs");
console.log(output); // --> 6
