// Write a function called isOddLength. Given a word, isOddLength returns true if the length of the given word is odd, otherwise it returns false.

// Write your function here
function isOddLength(word) {
  if (word.length % 2 === 0) {
    return false;
  } else return true;
}

let output = isOddLength("special");
console.log(output); // --> true
