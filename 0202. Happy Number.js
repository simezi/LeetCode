/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let memo = [];
  function judge(n) {
    let result = 0;
    while (n > 0) {
      let current = n % 10;
      result += current * current;
      n -= current;
      n /= 10;
    }
    if (result == 1) {
      return true;
    }
    if (memo[result]) {
      return false;
    }

    memo[result] = true;
    return judge(result);
  }
  return judge(n);
};
