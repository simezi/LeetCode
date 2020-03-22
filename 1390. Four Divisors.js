/**
 * @param {number[]} nums
 * @return {number}
 */
var sumFourDivisors = function(nums) {
  let max = Math.max(...nums);
  let primes = primeNumbers(max);
  function sum(n) {
    let count = 0;
    let result = 0;
    let max = Math.floor(Math.sqrt(n));
    for (let prime of primes) {
      if (prime > max) {
        break;
      }
      let divisor = n / prime;
      if (divisor % 1 == 0) {
        if (count == 1 || divisor == prime) {
          return 0;
        }
        if (!primes.has(divisor)) {
          if (divisor !== prime * prime) {
            return 0;
          }
        }
        count++;
        result += prime;
        result += divisor;
      }
    }
    if (result == 0) {
      return 0;
    }
    result += 1;
    result += n;
    return result;
  }
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    result += sum(nums[i]);
  }
  return result;
};

/**
 * @param {number} n
 * @return {number}
 */
var primeNumbers = function(n) {
  if (n <= 2) {
    return [];
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
  nums.shift();
  nums.shift();
  return new Set(nums.filter(x => x));
};
