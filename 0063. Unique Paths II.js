/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(grid) {
  for (let i = 0; i < grid.length; i++) {
    if (grid[i][0] > 0) {
      break;
    }
    grid[i][0] = -1;
  }

  for (let j = 0; j < grid[0].length; j++) {
    if (grid[0][j] > 0) {
      break;
    }

    grid[0][j] = -1;
  }

  for (let i = 1; i < grid.length; i++) {
    for (let j = 1; j < grid[0].length; j++) {
      if (grid[i][j] > 0) {
        continue;
      }
      grid[i][j] =
        (grid[i - 1][j] < 0 ? grid[i - 1][j] : 0) +
        (grid[i][j - 1] < 0 ? grid[i][j - 1] : 0);
    }
  }
  const result = grid[grid.length - 1][grid[0].length - 1];
  return result < 0 ? result * -1 : 0;
};
