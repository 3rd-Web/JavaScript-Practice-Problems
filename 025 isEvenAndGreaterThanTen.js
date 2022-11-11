// Write a function called isEvenAndGreaterThanTen. Given a number, isEvenAndGreaterThanTen returns true if the number is both even and greater than 10, otherwise it returns false.

// Write your function here
let isEvenAndGreaterThanTen = (num) => {
  if (num > 10 && num % 2 === 0) {
    return true;
  } else return false;
};

let output = isEvenAndGreaterThanTen(12);
console.log(output); // --> false
