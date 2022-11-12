// Write a function called computeAreaOfATriangle. Given the base and height of a triangle computeAreaOfATriangle returns its area.

// Write your function here
const computeAreaOfATriangle = (base, height) => {
  return (base / 2) * height;
};

let output = computeAreaOfATriangle(4, 6);
console.log(output); // --> 12
