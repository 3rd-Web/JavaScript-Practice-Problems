// Write a function called computeSummationToN. Given a number, computeSummationToN returns
// the sum of sequential numbers leading up to the given number, beginning at 0.

function computeSummationToN(n) {
  // your code here
  let counter = 0;

  for (let i = 1; i < n + 1; i++) {
    counter += i;
  }

  return counter;
}

let output = computeSummationToN(6);
console.log(output); // --> 21