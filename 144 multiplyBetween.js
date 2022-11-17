// Write a function called multiplyBetween. Given 2 integers, multiplyBetween
// returns the product between the two given integers, beginning at num1, and excluding num2.

function multiplyBetween(num1, num2) {
  // Your code here
  if (num1 > num2) {
    return 0;
  }
  let counter = 1;

  for (let i = num1; i < num2; i++) counter *= i;
  return counter;
}

let output = multiplyBetween(2, 5);
console.log(output); // --> 24
