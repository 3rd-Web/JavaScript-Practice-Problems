// Write a function called isPersonOldEnoughToDrive. Given a person object, that contains an age property,
// isPersonOldEnoughToDrive returns true if the given person is old enough to drive. Otherwise it returns false.

function isPersonOldEnoughToDrive(person) {
  // Add your code after this line
  if (person.age > 15) {
    return true;
  } else return false;
}

let obj = {
  age: 16,
};
let output = isPersonOldEnoughToDrive(obj);
console.log(output); // --> true
