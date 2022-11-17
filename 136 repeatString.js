// Write a function called repeatString. Given a string and a number, repeatString
// returns the given string repeated the given number of times.

function repeatString(string, num) {
  // your code here
  return string.repeat(num);
}

let output = repeatString("code", 3);
console.log(output); // --> 'codecodecode'
