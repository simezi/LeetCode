function rotateCell(level, matrix) {
  const end = matrix.length - level - 1;
  const count = matrix.length - level * 2 - 1;
  for (let i = 0; i < count; i++) {
    let temp = matrix[level][level + i];
    matrix[level][level + i] = matrix[end - i][level];
    matrix[end - i][level] = matrix[end][end - i];
    matrix[end][end - i] = matrix[level + i][end];
    matrix[level + i][end] = temp;
  }
}
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  if (matrix.length <= 1) {
    return matrix;
  }

  const count = Math.floor(matrix.length / 2);
  for (let i = 0; i < count; i++) {
    rotateCell(i, matrix);
  }
  return matrix;
};
