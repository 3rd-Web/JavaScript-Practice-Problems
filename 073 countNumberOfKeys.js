// Write a function called countNumberOfKeys. Given an object, countNumberOfKeys returns how many properties the given object has.

function countNumberOfKeys(obj) {
  // your code here
  let keyCounter = 0;
  for (let keys in obj) {
    keyCounter++;
  }
  return keyCounter;
}

let obj = {
  a: 1,
  b: 2,
  c: 3,
};
let output = countNumberOfKeys(obj);
console.log(output); // --> 3
