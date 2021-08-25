/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function(matrix) {
  let result = [];
  for (let i = 0; i < matrix.length; i++) {
    let row = matrix[i];
    let target = Math.min(...row);
    let index = row.indexOf(target);

    let isLucky = true;
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[j][index] > target) {
        isLucky = false;
      }
    }
    if (isLucky) {
      result.push(target);
    }
  }
  return result;
};
