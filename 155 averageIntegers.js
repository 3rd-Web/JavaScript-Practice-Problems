// Use the skeleton provided to write a working implementation.

// You need to discover the average of a list or array of numbers.

// Use the sum function to help you sum the numbers in the list.

function average(array_of_numbers) {
  // process array of numbers
  return sum(array_of_numbers) / array_of_numbers.length;
}

function sum(numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

console.log(average([1, 2]));
