// Write a function called isEqualTo. Given 2 numbers, isEqualTo returns true if num2 is equal to num1. Otherwise it returns false.

// Write your function here
const isEqualTo = (num1, num2) => {
  if (num1 === num2) {
    return true;
  } else return false;
};

let output = isEqualTo(11, 10);
console.log(output); // --> false
