// Write a function called computeAverageOfNumbers. Given an array of numbers, computeAverageOfNumbers returns their average.

// Write your function here !

const computeAverageOfNumbers = (numberArray) => {
  if (numberArray.length === 0) {
    return 0;
  }

  let arrLength = numberArray.length;
  let count = 0;

  for (let i = 0; i < numberArray.length; i++) {
    count = count + numberArray[i];
  }

  let sum = count / arrLength;

  return sum;
};

let input = [1, 2, 3, 4, 5];
let output = computeAverageOfNumbers(input);
console.log(output); // --> 3
