// Write a function called getLargestNumberAmongMixedElements. Given any array,
// getLargestNumberAmongMixedElements returns the biggest number in the given array.

function getLargestNumberAmongMixedElements(arr) {
  // your code here
  if (arr.length < 1) {
    return 0;
  }

  let getNum = [];

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      getNum.push(arr[i]);
    }
  }

  let getLargestNum = getNum.sort((a, b) => b - a)[0];

  return getLargestNum;
}

let output = getLargestNumberAmongMixedElements([3, "word", 5, "up", 3, 1]);
console.log(output); // --> 5
