// Write a function called isEitherEvenAndLessThan9. Given 2 numbers, isEitherEvenAndLessThan9 should return
// true only if one of the numbers is even and both are less than 9, otherwise it must return false.

function isEitherEvenAndLessThan9(num1, num2) {
  // your code here
  if ((num1 % 2 === 0 || num2 % 2 === 0) && num1 < 9 && num2 < 9) {
    return true;
  } else return false;
}

console.log(isEitherEvenAndLessThan9(2, 2)); // --> true
