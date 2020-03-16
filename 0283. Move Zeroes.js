/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let length = nums.length;
  let count = 0;
  for (let i = 0; i < length; i++) {
    let num = nums.shift();
    if (num == 0) {
      count++;
    } else {
      nums.push(num);
    }
  }
  nums.push(...new Array(count).fill(0));
};
