// Write a function called isEitherEven. Given 2 numbers, isEitherEven returns true if one of the numbers is even, otherwise it should return false.

// Write your function here
const isEitherEven = (num1, num2) => {
  if (num1 % 2 === 0 || num2 % 2 === 0) {
    return true;
  } else return false;
};

let output = isEitherEven(1, 2);
console.log(output); // --> true
