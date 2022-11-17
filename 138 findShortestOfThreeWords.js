// Write a function called findShortestOfThreeWords. Given 3 strings, findShortestOfThreeWords
// returns the shortest of the given string.

function findShortestOfThreeWords(word1, word2, word3) {
  // your code here
  if (
    word1.length === word2.length &&
    word1.length === word3.length &&
    word2.length === word3.length
  ) {
    return word1;
  } else if (word1.length < word2.length && word1.length < word3.length) {
    return word1;
  } else if (word2.length < word1.length && word2.length < word3.length) {
    return word2;
  } else return word3;
}
let output = findShortestOfThreeWords("a", "two", "three");
console.log(output); // --> 'a'
