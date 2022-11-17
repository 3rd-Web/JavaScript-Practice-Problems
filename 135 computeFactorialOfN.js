// Write a function called computeFactorialOfN. Given a natural number
// (a whole number greater than 0),computeFactorialOfN returns its factorial.

function computeFactorialOfN(n) {
  // your code here
  let counter = 1;

  for (let i = 1; i < n + 1; i++) {
    counter *= i;
  }

  return counter;
}

let output = computeFactorialOfN(3);
console.log(output); // --> 6
