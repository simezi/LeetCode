/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
  let result = 0;
  for (let i = 0; i < 32; i++) {
    let bit = n & 1;
    if (bit) {
      result |= bit << (31 - i);
    }
    n = n >>> 1;
  }
  return result >>> 0;
};
