// Write a function called isEvenWithoutModulo. Given a number,
// isEvenWithoutModulo returns true if it's even.

function isEvenWithoutModulo(num) {
  // your code here
  if (num % 2 === 0) {
    return true;
  } else return false;
}
let output = isEvenWithoutModulo(8);
console.log(output); // --> true
