/**
 * slow primitive version
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  if (dividend == Math.pow(-2, 31) && divisor == -1) {
    return Math.pow(2, 31) - 1;
  }
  const dividendSign = dividend < 0 ? -1 : 1;
  const divisorSign = divisor < 0 ? -1 : 1;
  const udividend = Math.abs(dividend);
  const udivisor = Math.abs(divisor);
  let i = 0;
  let rest = udividend;
  while (rest >= udivisor) {
    rest -= udivisor;
    i++;
  }
  return i * dividendSign * divisorSign;
};

divide(7, -3);
divide(1, 1);

/**
