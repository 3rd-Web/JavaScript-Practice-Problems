// Write a function called isOddWithoutModulo. Given a number, isOddWithoutModulo
// returns true if the passed in number is odd.

function isOddWithoutModulo(num) {
  // your code here
  if (num % 2 !== 0) {
    return true;
  } else if (num % 2 === 0) {
    return false;
  }

  return num;
}
let output = isOddWithoutModulo(17);
console.log(output); // --> true
