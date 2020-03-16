/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let dict = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (dict.has(nums[i])) {
      dict.delete(nums[i]);
    } else {
      dict.add(nums[i]);
    }
  }
  return [...dict][0];
};
