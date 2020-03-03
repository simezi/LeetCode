/**
 * very slow 'cause right I care about end of nums
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  nums.push(undefined);
  for (let i = 0; nums[i] != undefined; i++) {
    const current = nums[i];
    const lastIndex = nums.lastIndexOf(nums[i]);
    if (lastIndex != -1) {
      nums.splice(0, lastIndex + 1);
      i = -1;
    }
    nums.push(current);
  }
  nums.shift();

  return nums.length;
};
