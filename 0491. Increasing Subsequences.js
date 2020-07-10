/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (nums) {
  let result = [];
  let set = new Set();
  function helper(current, nums) {
    if (nums.length == 0) {
      return;
    }
    if (current.length == 0 || nums[0] >= current[current.length - 1]) {
      current.push(nums[0]);
      if (current.length > 1 && !set.has("" + current)) {
        result.push(current.slice());
        set.add("" + current);
      }
      helper(current, nums.slice(1));
      current.pop();
    }

    helper(current, nums.slice(1));
  }
  helper([], nums);
  return result;
};
