/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length != t.length) {
    return false;
  }
  let map = {};
  for (let i = 0; i < s.length; i++) {
    map[s.charAt(i)] = map[s.charAt(i)] == null ? 1 : map[s.charAt(i)] + 1;
  }
  for (let i = 0; i < s.length; i++) {
    if (!map[t.charAt(i)]) {
      return false;
    }
    map[t.charAt(i)] -= 1;
  }
  return true
};
