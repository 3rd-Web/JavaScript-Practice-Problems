// Write a function called computeCompoundInterest. Given a loan, an interest rate, a compounding frequency,
// and a time (in years), computeCompoundInterest returns the amount of compound interest generated.

function computeCompoundInterest(
  principal,
  interestRate,
  compoundingFrequency,
  timeInYears
) {
  // your code here
  let innerBody = 1 + interestRate / compoundingFrequency;
  let powerOf = innerBody ** (compoundingFrequency * timeInYears);
  let principalMultiplied = principal * powerOf;

  let compoundInterest = principalMultiplied - principal;

  return compoundInterest;
}

let output = computeCompoundInterest(1500, 0.043, 4, 6);
console.log(output); // --> 438.83682213410543

// formula A=P(1 + r/n)^nt
