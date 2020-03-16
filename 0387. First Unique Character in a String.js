/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  let dict = {};
  for (let i = 0; i < s.length; i++) {
    if (dict[s.charAt(i)] != null) {
      dict[s.charAt(i)] = -1;
    } else {
      dict[s.charAt(i)] = i;
    }
  }
  console.log(dict)
  let uniqs = Object.values(dict).filter(x => x >= 0);
  return uniqs.length > 0 ? Math.min(...uniqs) : -1;
};
