// Declare a function named flipEveryNChars.

// Function accepts 2 parameters named string and n, whose values will be string & number.

// When call function, return string with every n of characters flipped including spaces.

function flipEveryNChars(input, n) {
  // your code here
  let reges = `(.{${n}})`;
  let parsed = new RegExp(reges);

  let result = input
    .split(parsed)
    .map((e) => e.split("").reverse().join(""))
    .join("");
  return result;
}

let input = "a short example";
let output = flipEveryNChars(input, 5);
console.log(output); // --> ohs axe trelpma
