/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (needle == "") {
    return 0;
  }
  
  if(needle.length == 1) {
    return haystack.indexOf(needle)
  }
  
  outer: for (let i = 0; i < haystack.length - needle.length + 1; i++) {
    if (haystack.charAt(i) != needle.charAt(0)) {
      continue;
    }
    for (let j = 0; j < needle.length; j++) {
      if (haystack.charAt(i + j) != needle.charAt(j)) {
        continue outer;
      }
      if (j === needle.length - 1) {
        return i;
      }
    }
  }
  return -1;
};
