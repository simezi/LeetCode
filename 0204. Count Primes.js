/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  if (n <= 2) {
    return 0;
  }
  let nums = [];
  for (let i = 0; i < n; i++) {
    nums.push(i);
  }
  let max = Math.floor(Math.sqrt(n));

  for (let i = 2; i <= max; i++) {
    if (nums[i]) {
      for (let j = i * 2; j < n; j += i) {
        nums[j] = undefined;
      }
    }
  }
  let count = 0;
  for (let i = 2; i < nums.length; i++) {
    if (nums[i]) {
      count++;
    }
  }
  return count++;
};
