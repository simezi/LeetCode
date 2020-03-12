/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePathsIII = function(grid) {
  const cols = grid[0].length;
  const rows = grid.length;

  let result = [];
  let currentWalks = [];
  let visited = new Array(rows).fill().map(row => new Array(cols).fill(0));
  let startCol, startRow, endCol, endRow;
  let legalMoves = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 1) {
        startRow = i;
        startCol = j;
      }
      if (grid[i][j] === 2) {
        endRow = i;
        endCol = j;
      }
      if (grid[i][j] !== -1) {
        legalMoves++;
      }
    }
  }

  function walk(row, col) {
    if (row >= rows || row < 0 || col >= cols || col < 0) {
      return;
    }
    // 訪問済みはダメ & 通行不可はダメ
    if (visited[row][col] === 1 || grid[row][col] === -1) {
      return;
    }

    visited[row][col] = 1;
    currentWalks.push([row, col]);
    if (currentWalks.length === legalMoves) {
      if (row == endRow && col == endCol) {
        result.push([...currentWalks]);
      }
    }
    walk(row + 1, col);
    walk(row - 1, col);
    walk(row, col + 1);
    walk(row, col - 1);
    currentWalks.pop();
    visited[row][col] = 0;
  }

  walk(startRow, startCol);
  return result.length;
};
