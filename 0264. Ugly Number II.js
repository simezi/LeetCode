/**
 * solved By https://leetcode.com/problems/ugly-number-ii/discuss/521307/JavaScript-Solution-Commented-for-Fellow-Beginners
 * @param {number} n
 * @return {number}
 */

var nthUglyNumber = function(n) {
  const answersList = [1];
  let ind2 = 0;
  let ind3 = 0;
  let ind5 = 0;
  
  while (answersList.length < n) {
    let multipleTwo = answersList[ind2] * 2;
    let multipleThree = answersList[ind3] * 3;
    let multipleFive = answersList[ind5] * 5;
    let nextSmallestAnswer = Math.min(multipleTwo, multipleThree, multipleFive);
    if (nextSmallestAnswer % 2 === 0) {
      ind2++;
    }
    if (nextSmallestAnswer % 3 === 0) {
      ind3++;
    }
    if (nextSmallestAnswer % 5 === 0) {
      ind5++;
    }

    answersList.push(nextSmallestAnswer);
  }
  return answersList[n - 1];
};


/**
 * my brute force answer (TLE)
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
  let uglyNumbers = [1, 2, 3, 4, 5, 6, 8, 9, 10, 12];
  if (n <= 10) {
    return uglyNumbers[n - 1];
  }
  let uglySet = new Set(uglyNumbers);

  for (let i = 13; uglySet.size < n ; i++) {
    if (uglySet.has(i / 2) || uglySet.has(i / 3) || uglySet.has(i / 5)) {
      uglySet.add(i);
      if (uglySet.size === n) {
        return i;
      }
    }
  }
  return uglySet
};
