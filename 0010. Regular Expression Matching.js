/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  if(!p) {
    return !s 
  }
  let firstMatch = !!(s && (p.charAt(0) == s.charAt(0) || p.charAt(0) == '.'))
  if(p.length >=2 && p.charAt(1) == "*") {
    return (isMatch(s, p.substring(2)) || (firstMatch && isMatch(s.substring(1), p)))
  } else {
    return firstMatch && isMatch(s.substring(1), p.substring(1))
  }
};
