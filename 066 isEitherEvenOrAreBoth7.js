// Write a function called isEitherEvenOrAreBoth7. Given 2 numbers, 'isEitherEvenOrAreBoth7 returns
// true if any parameter is even or if both are 7. If it's not true, it will return false.

function isEitherEvenOrAreBoth7(num1, num2) {
  // your code here
  if (num1 % 2 === 0 || num2 % 2 === 0) {
    return true;
  } else if (num1 === 7 && num2 === 7) {
    return true;
  } else return false;
}

// let output = isEitherEvenOrAreBoth7(3, 7);
// console.log(output); // --> false

// let output = isEitherEvenOrAreBoth7(2, 3);
// console.log(output); // --> true
