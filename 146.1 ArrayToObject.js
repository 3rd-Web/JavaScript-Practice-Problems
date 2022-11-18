// Write a function called transformFirstAndLast that takes in an array, and returns an
// object with the first element of the array as the object's key, and the last element of the array as that key's value.

let arr = ["Queen", "Elizabeth", "Of Hearts", "Beyonce"];

function transformFirstAndLast(array) {
  // your code here
  let firstAndLast = { [array[0]]: array[array.length - 1] };

  return firstAndLast;
}

console.log(transformFirstAndLast(arr)); // --> { Queen: 'Beyonce' }
