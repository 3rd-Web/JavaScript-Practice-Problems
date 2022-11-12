// Write a function called removeNumbersLargerThan. Given a number and an object, removeNumbersLargerThan
// removes any property whose value are numbers greater than the given number.

let obj = {
  a: 8,
  b: 2,
  c: "montana",
};
function removeNumbersLargerThan(num, obj) {
  // your code here
  for (let key in obj) {
    if (obj[key] > num) {
      delete obj[key];
    }
  }
  return obj;
}

removeNumbersLargerThan(5, obj);
console.log(obj); // --> { b: 2, c: 'montana' }
