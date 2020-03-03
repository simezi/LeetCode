/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let head = 0;
  for (let runner = 0; runner < nums.length; runner++) {
    if (nums[runner] != val) {
      nums[head] = nums[runner];
      head++;
    }
  }
  return head;
};
