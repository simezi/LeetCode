/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  const int = parseInt(str)

  if(isNaN(int)) {
      return 0
  }
  const min = Math.pow(-2, 31)
  if(int < min) {
      return min
  }
  const max = Math.pow(2, 31) - 1
  if(int > max) {
      return max
  }
  return int
};
