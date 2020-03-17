/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  const a = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let left = 0, right = a.length - 1;
  while (left < right) {
    if (a.charAt(left) != a.charAt(right)) {
      return false;
    }
    left++;
    right--;
  }

  return true;
};
