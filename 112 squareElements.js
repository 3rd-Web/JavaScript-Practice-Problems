// Write a function called squareElements. Given an array of numbers, squareElements should
// return a new array where each element is the square of the element of the given array.

function squareElements(arr) {
  // your code here
  let newArray = [];

  for (let e of arr) {
    newArray.push(e * e);
  }

  return newArray;
}

let output = squareElements([1, 2, 3]);
console.log(output); // --> [1, 4, 9]
