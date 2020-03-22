/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  let result = [];
  for (let i = 1; i <= numRows; i++) {
    let row = [];
    for (let j = 0; j < i; j++) {
      if (j == 0 || j == i - 1) {
        row.push(1);
      } else {
        let prevRow = result[i - 2];
        row.push(prevRow[j] + prevRow[j - 1]);
      }
    }
    result.push(row);
  }
  return result;
};
