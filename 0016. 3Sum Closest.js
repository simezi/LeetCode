/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  if (nums.length < 3) {
    return [];
  }
  nums.sort((a, b) => a - b);
  let minDistance = Math.abs(
    nums[0] + nums[1] + nums[nums.length - 1] - target
  );
  let result;
  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      let distance = Math.abs(target - sum);
      if (minDistance >= distance) {
        minDistance = distance;
        result = sum;
      }
      if (sum >= target) {
        right--;
      } else {
        left++;
      }
    }
  }
  return result;
};
