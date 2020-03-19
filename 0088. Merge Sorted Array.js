/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  for (let i = 0; i < n; i++) {
    nums1.pop();
  }
  let i = 0;
  let j = 0;
  while (nums2.length > 0) {
    let next = nums2.shift();
    while (nums1[i] < next && i < m + j) {
      i++;
    }
    nums1.splice(i, 0, next);
    j++;
  }
  return nums1;
};
