/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
  let result = [];
  const sorted = [...nums];
  sorted.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    const count = sorted.indexOf(nums[i]);
    result.push(count);
  }
  return result;
};
