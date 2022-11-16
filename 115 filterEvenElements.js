// Write a function called filterEvenElements. Given an array of numbers, filterEvenElements
// returns an array containing only the even numbers of the given array.

function filterEvenElements(arr) {
  // your code here
  let evenNumberArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenNumberArr.push(arr[i]);
    }
  }

  return evenNumberArr;
}

let output = filterEvenElements([2, 3, 4, 5, 6]);
console.log(output); // --> [2, 4, 6]
