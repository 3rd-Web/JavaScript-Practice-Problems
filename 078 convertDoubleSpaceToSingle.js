// Write a function called convertDoubleSpaceToSingle. Given a string, convertDoubleSpaceToSingle
// returns the passed in string, with all the double spaces converted to single spaces.

function convertDoubleSpaceToSingle(str) {
  // your code here
  let splitString = str.split("  ");
  let joinString = splitString.join(" ");
  return joinString;
}

let output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces"
