// Write a function fromListToObject which takes in a matrix (an array of arrays), and
// returns an object with each pair of elements in the array as a key-value pair.

function fromListToObject(array) {
  // your code here

  let arr = {};

  for (let e of array) {
    arr[e[0]] = e[1];
  }

  return arr;
}

let output = fromListToObject([
  ["make", "Ford"],
  ["model", "Mustang"],
  ["year", 1964],
]);
console.log(output); // => { make: 'Ford', model: 'Mustang', year: 1964 }
