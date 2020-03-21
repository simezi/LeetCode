/**
 * @param {number} lo
 * @param {number} hi
 * @param {number} k
 * @return {number}
 */
var getKth = function(lo, hi, k) {
  let memo = [];
  if (lo == hi) {
    return lo
  }
  function power(n, length) {
    if (n == 1) {
      return length + 1;
    }

    if (memo[n]) {
      return memo[n];
    }

    return n % 2 === 0
      ? power(n / 2, length + 1)
      : power(n * 3 + 1, length + 1);
  }

  let array = [];
  for (let i = lo; i <= hi; i++) {
    array.push(i);
  }
  let results = array.map(x => [power(x, 1), x]);
  results.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  return results[k - 1][1];
};
