// Declare a function named flipPairs.

// Function accepts parameter named string, whose argument value will be string.

// When call function, return string with every pair of characters flipped including spaces.

function flipPairs(input) {
  // your code here
  let result = input.replace(/(.)(.)/g, "$2$1");

  return result;
}

let input =
  "check out how interesting this problem is, it's insanely interesting!";
let output = flipPairs(input);
console.log(output); // --> hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!
