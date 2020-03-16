/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  let count = Math.floor(s.length / 2);
  let end = s.length - 1;
  for (let i = 0; i < count; i++) {
    [s[i], s[end - i]] = [s[end - i], s[i]];
  }
  return s;
};
