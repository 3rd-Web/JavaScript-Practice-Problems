/*
Write a function called isOldEnoughToVote. Given a number, in this case an age, 
isOldEnoughToVote returns whether a person of this given age is old enough to legally vote in the United States.
*/

function isOldEnoughToVote(age) {
  // your code here
  if (age > 17) {
    return true;
  } else return false;
}

let output = isOldEnoughToVote(22);
console.log(output); // --> true
