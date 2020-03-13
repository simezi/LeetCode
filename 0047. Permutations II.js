/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  let result = [];
  let used = [];
  let current = [];
  function search() {
    if (current.length == nums.length) {
      result.push([...current]);
      return;
    }

    let subUsed = {};
    for (let i = 0; i < nums.length; i++) {
      if (used[i] || subUsed[nums[i]]) {
        continue;
      }
      current.push(nums[i]);
      used[i] = true;
      search(current);
      used[i] = false;
      current.pop();
      subUsed[nums[i]] = 1;
    }
  }
  search([]);
  return result;
};
