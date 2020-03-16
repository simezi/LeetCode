/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  function createDict(nums) {
    let result = {};
    for (let i = 0; i < nums.length; i++) {
      result[nums[i]] = result[nums[i]] ? result[nums[i]] + 1 : 1;
    }
    return result;
  }
  let nums1dict = createDict(nums1);
  let result = [];

  for (let i = 0; i < nums2.length; i++) {
    if (nums1dict[nums2[i]]) {
      result.push(nums2[i]);
      nums1dict[nums2[i]]--;
    }
  }
  return result;
};
