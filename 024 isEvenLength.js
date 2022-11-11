// Write a function called isEvenLength. Given a word, isEvenLength returns true if the length of the given word is even, otherwise it returns false.

// Write your function here
const isEvenLength = (word) => {
  if (word.length % 2 === 0) {
    return true;
  } else return false;
};

let output = isEvenLength("wow");
console.log(output); // --> false
