// Write a function callled convertScoreToGradeWithPlusAndMinus. Given a score, convertScoreToGradeWithPlusAndMinus
// returns a string representing the letter grade corresponding to the given score.

function convertScoreToGradeWithPlusAndMinus(score) {
  // your code here
  if (score > 100 || score < 0) {
    return `INVALID SCORE`;
  } else if (score >= 90) {
    if (score >= 90 && score <= 92) {
      return `A-`;
    } else if (score >= 98 && score <= 98) {
      return `A+`;
    } else return `A`;
  } else if (score >= 80) {
    if (score >= 80 && score <= 82) {
      return `B-`;
    } else if (score >= 88 && score < 90) {
      return `B+`;
    } else return `B`;
  } else if (score >= 70) {
    if (score >= 70 && score <= 72) {
      return `C-`;
    } else if (score >= 78 && score < 80) {
      return `C+`;
    } else return `C`;
  } else if (score >= 60) {
    if (score >= 60 && score <= 62) {
      return `D-`;
    } else if (score >= 68 && score < 70) {
      return `D+`;
    } else return `D`;
  } else return `F`;
}

let output = convertScoreToGradeWithPlusAndMinus(91);
console.log(output); // --> 'A-'
