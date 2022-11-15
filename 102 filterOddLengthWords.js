// Write a function called filterOddLengthWords. Given an array of string, filterOddLengthWords
// returns an array containing only the elements of the given array whose lengths are odd numbers.

function filterOddLengthWords(words) {
  // your code here
  array = [];

  for (i = 0; i < words.length; i++) {
    if (words[i].length % 2 !== 0) {
      array.push(words[i]);
    }
  }

  return array;
}

let output = filterOddLengthWords(["there", "it", "is", "now"]);
console.log(output); // --> ['there', "now']
