// Write a function called computePerimeterOfARectangle. Given a length and a width
// describing a rectangle, computePerimeterOfARectangle returns its perimeter.

function computePerimeterOfARectangle(length, width) {
  // your code here
  return length + length + (width + width);
}
let output = computePerimeterOfARectangle(5, 2);
console.log(output); // --> 14
