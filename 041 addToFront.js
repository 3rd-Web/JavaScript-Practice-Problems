// Write a function called addToFront. Given an array and an element, addToFront
// adds the given element to the front of the given array, and returns the given array.

function addToFront(arr, element) {
    // your code here
    arr.unshift(element)
    return arr
  }
  
  let output = addToFront([1, 2], 3);
  console.log(output); // -> [3, 1, 2]