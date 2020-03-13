/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
    if (n === 1) {
      return isBadVersion(n) ? 1 : 0;
    }
    let left = 0;
    let right = n - 1;
    let memo = [];
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      const result = isBadVersion(mid + 1);
      memo[mid + 1] = result;
      if (memo[mid] == false && memo[mid + 1] == true) {
        return mid + 2;
      }
      if (memo[mid] == true && memo[mid - 1] == false) {
        return mid + 1;
      }
      if (result) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    return left + 1;
  };
};
