// Write a function called or. Given 2 boolean expressions, or returns true or false, corresponding to the || operator.

function or(expression1, expression2) {
  // your code here
  if (expression1 === true && expression2 === false) {
    return true;
  } else if (expression1 === true && expression2 === true) {
    return true;
  } else if (expression1 === false && expression2 === true) {
    return true;
  } else return false;
}

let output = or(true, false);
console.log(output); // --> true;
