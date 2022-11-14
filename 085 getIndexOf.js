// Write a function called getIndexOf. Given a character and a string, getIndexOf returns the first position of the given character in the given string.

// Write your function here
const getIndexOf = (character, string) => {
  // return string.indexOf(character);
  for (i = 0; i < string.length; i++) {
    if (string[i] === character) {
      return i;
    }
  }
  return -1;
};

let output = getIndexOf("a", "I am a hacker");
console.log(output); // --> 2
