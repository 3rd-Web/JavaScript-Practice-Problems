// Write a function called transformEmployeeData that transforms some employee data from one format to another.

function transformEmployeeData(array) {
  // your code here
  let result = [];

  for (let x of array) {
    let obj = {};
    for (let y of x) {
      obj[y[0]] = y[1];
    }
    result.push(obj);
  }

  return result;
}

let output = transformEmployeeData([
  [
    ["firstName", "Joe"],
    ["lastName", "Blow"],
    ["age", 42],
    ["role", "clerk"],
  ],
  [
    ["firstName", "Mary"],
    ["lastName", "Jenkins"],
    ["age", 36],
    ["role", "manager"],
  ],
]);
console.log(output); // [{firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk'}, {firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager'}]
