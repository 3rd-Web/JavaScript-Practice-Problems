// Write a function called addToFrontOfNew. Given an array and an element, addToFrontOfNew returns a new array
// containing all the elements of the given array, with the given element added to the front.

function addToFrontOfNew(arr, element) {
  // Write your function here
  let newArr = [];
  newArr.push(element);

  arr.forEach((i) => {
    newArr.push(i);
  });

  return newArr;
}

let input = [1, 2];
let output = addToFrontOfNew(input, 3);
console.log(output); // --> [3, 1, 2];
console.log(input); // --> [1, 2]
