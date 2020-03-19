/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let result = nums[0];
  for (let i = 1; i < nums.length; i++) {
    nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
    result = Math.max(nums[i], result);
  }
  return result;
};
