// Write a function called getAllLetters. Given a word, getAllLetters returns an array containing every character in the word.

function getAllLetters(str) {
  // your code here
  return Array.from(str);
}

let output = getAllLetters("Radagast");
console.log(output); // --> ['R', 'a', 'd', 'a', 'g', 'a', 's', 't']
