/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  let memo = [];
  for (let i = 0; i < nums.length; i++) {
    if (memo[nums[i]]) {
      return true;
    }
    memo[nums[i]] = 1;
  }
  return false;
};
