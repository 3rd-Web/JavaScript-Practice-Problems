// Write a function called computeSumBetween. Given 2 integers, computeSumBetween
// returns the sum between the two given integers, beginning at num1, and excluding num2.

function computeSumBetween(num1, num2) {
  // Your code here
  if (num1 > num2) {
    return 0;
  }
  let counter = 0;

  for (let i = num1; i < num2; i++) counter += i;

  return counter;
}

let output = computeSumBetween(2, 5);
console.log(output); // --> 9
