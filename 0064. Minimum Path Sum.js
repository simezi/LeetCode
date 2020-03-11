/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  const row = grid[0].length - 1;
  const column = grid.length - 1;

  for (let i = 1; i <= row; i++) {
    grid[0][i] += grid[0][i - 1];
  }

  for (let j = 1; j <= column; j++) {
    grid[j][0] += grid[j - 1][0];
  }
  for (let i = 1; i <= row; i++) {
    for (let j = 1; j <= column; j++) {
      grid[j][i] += Math.min(grid[j - 1][i], grid[j][i - 1]);
    }
  }

  return grid[column][row];
};
