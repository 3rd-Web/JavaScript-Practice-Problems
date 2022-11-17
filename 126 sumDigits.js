// Write a function called sumDigits. Given a number, sumDigits returns the sum of all its digits.

function sumDigits(num) {
  // your code here
  let numString = num.toString().split("").map(Number);

  let sum = 0;

  for (let i = 0; i < numString.length; i++) {
    sum += numString[i];
  }

  return sum;
}

let output = sumDigits(316);

// console.log(typeof output);

console.log(output); // --> 10
