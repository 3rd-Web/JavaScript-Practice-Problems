// Write a function called checkAge. Given a person's name and age, checkAge returns one of two messages:

// Go home, {insert_name_here}!, if they are younger than 21.

// Welcome, {insert_name_here}!, if they are 21 or older.

function checkAge(name, age) {
  // your code here
  if (age < 21) {
    return `Go home, ${name}!`;
  }
  if (age > 20 && age > 0) {
    return `Welcome, ${name}!`;
  }
}

let output = checkAge("Adrian", 22);
console.log(output); // --> 'Welcome, Adrian!'
