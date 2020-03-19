/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (nums.length == 0) {
    return 0;
  }
  if (nums.length <= 2) {
    return Math.max(...nums);
  }
  for (let i = 2; i < nums.length; i++) {
    nums[i] += Math.max(nums[i - 3] || 0, nums[i - 2]);
  }
  return Math.max(nums[nums.length - 1], nums[nums.length - 2]);
};
