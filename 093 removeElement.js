// Write a function called removeElement. Given an array of elements, and a discarder parameter,
// removeElement returns an array containing the items in the given array that do not match the discarder parameter.

// Write your function here
const removeElement = (array, discarder) => {
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] !== discarder) {
      newArray.push(array[i]);
    }
  }

  return newArray;
};

let output = removeElement([1, 2, 3, 2, 1], 2);
console.log(output); // --> [1, 3, 1]
