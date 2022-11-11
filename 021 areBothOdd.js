// Write a function called areBothOdd. Given 2 numbers, areBothOdd returns true if both numbers are odd, otherwise it should return false.

// Write your function here
const areBothOdd = (num1, num2) => {
  if (num1 % 2 === 0 || num2 % 2 === 0) {
    return false;
  } else return true;
};

let output = areBothOdd(7, 4);
console.log(output); // --> true
