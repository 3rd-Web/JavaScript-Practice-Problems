// Write a function called countAllCharacters. Given a string, countAllCharacters
// returns an object where each key is a character in the given string.

// Write your function here

const countAllCharacters = (string) => {
  if (string.length === 0) {
    return {};
  }

  let obj = {};

  for (let i = 0; i < string.length; i++) {
    if (obj[string[i]]) {
      obj[string[i]] = obj[string[i]] + 1;
    } else obj[string[i]] = 1;
  }

  return obj;
};

let output = countAllCharacters("banana");
console.log(output); // --> {b: 1, a: 3, n: 2}
