// Write a function called calculateBillTotal. Given the amount of taxes and tip of a meal, calculateBillTotal
// returns the total amount due after paying taxes and tips.

function calculateBillTotal(preTaxAndTipAmount) {
  // your code here
  let tax = 0.095;
  let tip = 0.15;

  let total =
    preTaxAndTipAmount * tax + preTaxAndTipAmount * tip + preTaxAndTipAmount;

  return total;
}
let output = calculateBillTotal(20);
console.log(`$${output}`); // --> 24.9
