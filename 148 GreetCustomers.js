// Write a function called greetCustomer. Given a name, greetCustomer returns a greeting
// based on how many times that customer has visited the restaurant. Please check to the customerData object.

let customerData = {
  Joe: {
    visits: 1,
  },
  Carol: {
    visits: 2,
  },
  Howard: {
    visits: 3,
  },
  Carrie: {
    visits: 4,
  },
};

function greetCustomer(firstName) {
  let greeting = "";
  // your code here
  if (customerData[firstName] && customerData[firstName].visits === 1) {
    greeting = `Welcome back, ${firstName}! We're glad you liked us the first time!`;
  } else if (customerData[firstName] && customerData[firstName].visits > 1) {
    greeting = `Welcome back, ${firstName}! So glad to see you again!`;
  } else return `Welcome! Is this your first time?`;

  return greeting;
}

let output = greetCustomer("Terrance");
console.log(output); // --> 'Welcome! Is this your first time?'

let output2 = greetCustomer("Joe");
console.log(output2); // --> 'Welcome back, Joe! We're glad you liked us the first time!'

let output3 = greetCustomer("Carol");
console.log(output3); // --> 'Welcome back, Carol! So glad to see you again!'
