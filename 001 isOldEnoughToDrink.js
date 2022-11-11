/*
Write a function called isOldEnoughToDrink. Given a number, in this case an age, 
isOldEnoughToDrink returns whether a person of this given age is old enough to legally drink in the United States.
*/

function isOldEnoughToDrink(age) {
  // your code here
  if (age > 20) {
    return true;
  } else return false;
}

let output = isOldEnoughToDrink(22);
console.log(output); // --> true
