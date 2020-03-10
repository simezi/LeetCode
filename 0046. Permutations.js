/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  let result = [];

  function perm(nums, temp) {
    if (nums.length === 0) {
      result.push([...temp]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      temp.push(nums.shift());
      perm(nums, temp);
      nums.push(temp.pop());
    }
  }
  perm(nums, []);
  return result;
};
