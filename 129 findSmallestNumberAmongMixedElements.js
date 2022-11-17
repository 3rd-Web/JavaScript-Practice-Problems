// Write a function called findSmallestNumberAmongMixedElements. Given an array of mixed elements,
// findSmallestNumberAmongMixedElements returns the smallest number within the given array.

function findSmallestNumberAmongMixedElements(arr) {
  // your code here
  if (arr.length < 1) {
    return 0;
  }

  let getNumbers = [];

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      getNumbers.push(arr[i]);
    }
  }

  let smallestNumber = getNumbers.sort((a, b) => a - b)[0];

  return smallestNumber;
}

let output = findSmallestNumberAmongMixedElements([4, "lincoln", 9, "octopus"]);
console.log(output); // --> 4
