// Write a function called isOdd. Given a number, isOdd returns true if the given number is odd. Otherwise it returns false.

// Write your function here
const isOdd = (num) => {
  if (num % 2 === 0) {
    return false;
  } else return true;
};

let output = isOdd(9);
console.log(output); // --> true
