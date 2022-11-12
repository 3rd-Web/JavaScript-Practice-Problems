// Write a function called isPersonOldEnoughToDrink. Given a person object, that contains an age property,
// isPersonOldEnoughToDrink returns true if the given person is old enough to drink. Otherwise it returns false.

function isPersonOldEnoughToDrink(person) {
  // Add your code after this line
  if (person.age > 20) {
    return true;
  } else return false;
}

let obj = {
  age: 16,
};
let output = isPersonOldEnoughToDrink(obj);
console.log(output); // --> false
