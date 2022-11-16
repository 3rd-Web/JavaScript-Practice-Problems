// Write a function joinArrayOfArrays. Given a matrix (array of arrays), joinArrayOfArrays
// returns a single array containing the elements of the nested arrays.

function joinArrayOfArrays(arr) {
  // your code here
  let arrA = arr[0];
  let arrB = arr[1];
  let arrC = arr[2];

  let arrComplete = arrA.concat(arrB, arrC);

  return arrComplete;
}

let output = joinArrayOfArrays([
  [1, 4],
  [true, false],
  ["x", "y"],
]);
console.log(output); // --> [1, 4, true, false, 'x', 'y']
