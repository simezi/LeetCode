/**
 * DP
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  let paths = new Array(n);
  for (let i = 0; i < n; i++) {
    paths[i] = new Array(m);
  }

  for (let i = 0; i < m; i++) {
    paths[0][i] = 1;
  }

  for (let i = 0; i < n; i++) {
    paths[i][0] = 1;
  }

  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      paths[i][j] = paths[i - 1][j] + paths[i][j - 1];
    }
  }
  return paths[n - 1][m - 1];
};


/**
 * mathmatical
 */
var memo = [1, 1];
function factorial(x) {
  if (memo[x]) {
    return memo[x];
  }
  if (x == 1) {
    return x;
  }
  let result = x * factorial(x - 1);
  memo[x] = result;
  return result;
}

var uniquePaths = function(m, n) {
  return factorial(m + n - 2) / factorial(n - 1) / factorial((m - 1));
};
