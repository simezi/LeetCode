/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  if (nums.length == 0) {
    return [-1, -1];
  }
  function binarySearch(nums, target) {
    if (nums.length === 1) {
      return nums[0] === target ? 0 : -1;
    }
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (target < nums[mid]) {
        right = mid - 1;
      } else if (target > nums[mid]) {
        left = mid + 1;
      } else {
        return mid;
      }
    }
    return -1;
  }

  let index = binarySearch(nums, target);

  if (index == -1) {
    return [-1, -1];
  }
  let left = index;
  let right = index;

  while (nums[left] == target) {
    left--;
  }

  while (nums[right] == target) {
    right++;
  }

  return [left + 1, right - 1];
};
