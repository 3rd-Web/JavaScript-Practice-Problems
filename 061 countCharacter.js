// Write a function called countCharacter. Given a string input and a character,
// countCharacter returns the number of occurences of a given character in the given string.

function countCharacter(str, char) {
  // your code here
  let letterCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === char) {
      letterCount += 1;
    }
  }
  return letterCount;
}

let output = countCharacter("I am a hacker", "a");
console.log(output); // --> 3
