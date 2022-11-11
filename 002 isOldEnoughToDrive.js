/*
Write a function called isOldEnoughToDrive. Given a number, in this case an age, 
isOldEnoughToDrive returns whether a person of this given age is old enough to legally drive in the United States.
*/

function isOldEnoughToDrive(age) {
  // your code here
  if (age > 15) {
    return true;
  } else return false;
}

let output = isOldEnoughToDrive(22);
console.log(output); // --> true
