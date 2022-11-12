// Write a function called isPersonOldEnoughToVote.nGiven a person object, that contains an age property,
// isPersonOldEnoughToVote returns true if the given person is old enough to vote. Otherwise it returns false.

function isPersonOldEnoughToVote(person) {
  // Add your code after this line
  if (person.age > 17) {
    return true;
  } else return false;
}

let obj = {
  age: 19,
};
let output = isPersonOldEnoughToVote(obj);
console.log(output); // --> true
