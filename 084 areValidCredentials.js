// Write a function called areValidCredentials. Given a name and a password, areValidCredentials, returns true if the name is longer than 3 characters.

// The password must be at least 8 characters long, otherwise it should return false.

// Write your function here
const areValidCredentials = (name, password) => {
  if (name.length > 3 && password.length >= 8) {
    return true;
  } else return false;
};

let output = areValidCredentials("Ritu", "mylongpassword");
console.log(output); // --> true
