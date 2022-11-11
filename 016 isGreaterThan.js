// Write a function called isGreaterThan. Given 2 numbers, isGreaterThan returns true if num2 is greater than num1. Otherwise it returns false.

function isGreaterThan(num1, num2) {
  // your code here
  if (num1 < num2) {
    return true;
  } else return false;
}

let output = isGreaterThan(11, 10);
console.log(output); // --> false
