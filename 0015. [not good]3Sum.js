var twoSum = function(nums, target, first) {
  let left = 0;
  let right = nums.length - 1;
  let result = [];
  while (left < right) {
    const calc = nums[left] + nums[right];
    if (calc === target) {
      result.push([first, nums[left], nums[right]]);
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

var threeSum = function(nums) {
  if (nums.length < 3) {
    return [];
  }

  nums.sort((a, b) => a - b);
  let result = [];
  for (let i = 0; i < nums.length - 2; i++) {
      if(nums[i] > 0) {
          break
      }
    result = [
      ...result,
      ...twoSum(nums.slice(i + 1), 0 - nums[i], nums[i])
    ];

    while (nums[i] == nums[i + 1]) {
      i++;
    }
  }
  return result;
};
