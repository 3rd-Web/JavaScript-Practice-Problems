// Write a function called getAllWords. Given a sentence, getAllWords returns an array containing every word in the sentence.

function getAllWords(str) {
  // your code here
  return str.split(" ");
}

let output = getAllWords("Radagast the Brown");
console.log(output); // --> ['Radagast', 'the', 'Brown']
