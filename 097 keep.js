// Write a function called keep. Given an array and a keeper element, keep returns an array containing the items that match the given keeper element.

// Write your function here

const keep = (array, keepElement) => {
  newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] === keepElement) {
      newArray.push(keepElement);
    }
  }

  return newArray;
};

let output = keep([1, 2, 3, 2, 1], 2);
console.log(output); // --> [2, 2]
