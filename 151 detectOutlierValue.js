// Declare a function named detectOutlierValue.

// Function accepts parameter named string, whose argument value will be string.

// When call function, return value should be 1-indexed, not 0-indexed sole even number or sole odd number.

function detectOutlierValue(string) {
  // your code here
  let oddNumbers = 0;
  let evenNumbers = 0;
  let result = string.split(" ");
  for (let x of result) {
    if (Number.parseInt(x) % 2 == 0) evenNumbers += 1;
    if (Number.parseInt(x) % 2 != 0) oddNumbers += 1;
  }
  if (evenNumbers > oddNumbers) {
    for (let x = 0; x < result.length; x++) {
      if (Number.parseInt(result[x]) % 2 != 0) return x + 1;
    }
  } else {
    for (let x = 0; x < result.length; x++) {
      if (Number.parseInt(result[x]) % 2 == 0) return x + 1;
    }
  }
}

// Third number is odd, while the rest of the numbers are even
console.log(detectOutlierValue("2 4 7 8 10")); // => 3

// Second number is even, while the rest of the numbers are odd
console.log(detectOutlierValue("1 10 1 1")); //=> 2
