/**
 * @param {number} n
 * @param {number[]} speed
 * @param {number[]} efficiency
 * @param {number} k
 * @return {number}
 */
var maxPerformance = function(n, speed, efficiency, k) {
  let result = 0;

  let members = [];
  let used = [];
  let speedSum = 0;
  function search(current, eff) {
    result = Math.max(speedSum * eff, result);
    if (members.length === k) {
      return;
    }

    for (let i = current; i < n; i++) {
      if (eff != Number.MAX_VALUE && eff - efficiency[i] > 100) {
        continue;
      }
      members.push(i);
      speedSum += speed[i];
      search(i + 1, Math.min(eff, efficiency[i]));
      speedSum -= speed[i];
      members.pop();
    }
  }

  search(0, Number.MAX_VALUE);

  return result % (Math.pow(10, 9) + 7);
};
