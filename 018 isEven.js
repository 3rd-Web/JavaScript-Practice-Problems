// Write a function called isEven. Given a number, isEven returns true if it is even. Otherwise it returns false.

// Write your function here
const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  } else return false;
};

let output = isEven(11);
console.log(output); // --> false
