var twoSum = function(nums, target, first, second) {
  let left = 0;
  let right = nums.length - 1;
  let result = [];
  while (left < right) {
    const calc = nums[left] + nums[right];
    if (calc === target) {
      result.push([first, second, nums[left], nums[right]]);
    }
    if (calc >= target) {
      while (nums[right] == nums[right - 1]) {
        right--;
      }
      right--;
    } else {
      while (nums[left] == nums[left + 1]) {
        left++;
      }
      left++;
    }
  }
  return result;
};

var threeSum = function(nums, target, first) {
  if (nums.length < 3) {
    return [];
  }

  //   nums.sort((a, b) => a - b);
  let result = [];
  for (let i = 0; i < nums.length - 2; i++) {
    result = [
      ...result,
      ...twoSum(nums.slice(i + 1), target - nums[i], first, nums[i])
    ];

    while (nums[i] == nums[i + 1]) {
      i++;
    }
  }
  return result;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  if (nums.legnth < 4) {
    return [];
  }
  nums.sort((a, b) => a - b);
  let result = [];
  for (let i = 0; i < nums.length - 3; i++) {
    result = [
      ...result,
      ...threeSum(nums.slice(i + 1), target - nums[i], nums[i])
    ];
    while (nums[i] == nums[i + 1]) {
      i++;
    }
  }

  return result;
}
