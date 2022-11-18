// The function isRotated receives two strings, if the second string is a rotated
// version of the first one, it should return true, otherwise it should return false.

function isRotated(str1, str2) {
  // your code here
  let fracc = str1.split("");
  let aux = [];
  for (let i of fracc) aux.push(str2.indexOf(i));
  let result = !aux.includes(-1);
  return result;
}

console.log(isRotated("hello world", "orldhello w")); // => true
console.log(isRotated("hello world", "omrel wp")); // => false
