/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  let diffbits = x ^ y;
  let count = 0;
  while (diffbits > 0) {
    if ((diffbits & 1) == 1) {
      count++;
    }
    diffbits >>= 1;
  }
  return count;
};
