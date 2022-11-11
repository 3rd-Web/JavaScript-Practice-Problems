/*
Write a function called isOldEnoughToDrinkAndDrive. Given a number, in this case an age 
isOldEnoughToDrinkAndDrive returns whether a person of this given age is old enough to legally drink and drive in the United States.
*/

function isOldEnoughToDrinkAndDrive(age) {
  // your code here
  if (typeof age === "number") {
    return false;
  }
}

let output = isOldEnoughToDrinkAndDrive(22);
console.log(output); // --> false
