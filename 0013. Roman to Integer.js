/**
 * @param {number} num
 * @return {string}
 */
var romanToInt = function(s) {
  const table = {'I':1, 'V':5, 'X':10, 'L':50, 'C':100, 'D':500, 'M':1000}
  let sum = 0
  let prev
  let current
  for(let i = 0; i < s.length; i++) {
    current = table[s.charAt(i)]
    sum += current
    if(current > prev) {
      sum -= prev * 2
    }
    prev = current
  }
  return sum
};
