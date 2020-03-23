/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  let firstRowZero = false;
  let firstColZero = false;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] == 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
        if (i == 0) {
          firstRowZero = true;
        }
        if (j == 0) {
          firstColZero = true;
        }
      }
    }
  }
  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[i].length; j++) {
      if (matrix[0][j] == 0 || matrix[i][0] == 0) {
        matrix[i][j] = 0;
      }
    }
  }
  if (firstRowZero) {
    for (let i = 0; i < matrix[0].length; i++) {
      matrix[0][i] = 0;
    }
  }

  if (firstColZero) {
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][0] = 0;
    }
  }
};
