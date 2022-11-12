// Write a function called removeStringValuesLongerThan. Given a number and an object, removeStringValuesLongerThan
// removes any properties on the given object whose values are strings longer than the given number.

function removeStringValuesLongerThan(num, obj) {
  // your code here
  for (let key in obj) {
    if (obj[key].length > num) {
      delete obj[key];
    }
  }
  return obj;
}

let obj = {
  name: "Montana",
  age: 20,
  location: "Texas",
};
removeStringValuesLongerThan(6, obj);
console.log(obj); // { age: 20, location: 'Texas' }
