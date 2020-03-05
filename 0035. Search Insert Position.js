/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  if (nums[nums.length - 1] < target) {
    return nums.length;
  }
    
  if (target <= nums[0]) {
    return 0;
  }
    
  return binarySearch(nums, target)
};

function binarySearch(nums, target) {

  if (nums.length === 1) {
    return nums[0] > target ? 0 : 1;
  }

  const center = Math.floor(nums.length / 2);
  if (nums[center] < target) {
    // right
    return center + binarySearch(nums.slice(center, nums.length), target);
  } else if (nums[center] > target) {
    // left
    return binarySearch(nums.slice(0, center), target);
  } else {
    return center;
  }
}
