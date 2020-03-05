function checkBlock(rblock, cblock, tester) {
  const rootColumn = cblock * 3;
  const rootRow = rblock * 3;
  let store = {};
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (tester[rootRow + i][rootColumn + j] == ".") {
        continue;
      }
      if (store[tester[rootRow + i][rootColumn + j]] != null) {
        return false;
      }
      store[tester[rootRow + i][rootColumn + j]] = 1;
    }
  }
  return true;
}

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  //　row+columnチェック
  for (let i = 0; i < 9; i++) {
    let Rstore = {};
    let Cstore = {};
    for (let j = 0; j < 9; j++) {
      if (board[i][j] != ".") {
        if (Rstore[board[i][j]] != null) {
          return false;
        } else {
          Rstore[board[i][j]] = 1;
        }
      }

      if (board[j][i] == ".") {
        continue;
      }
      if (Cstore[board[j][i]] != null) {
        return false;
      } else {
        Cstore[board[j][i]] = 1;
      }
    }
  }

  // blockチェック
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (!checkBlock(i, j, board)) {
        return false;
      }
    }
  }

  return true;
};
