/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
  this.nums = nums;
  this.original = [...nums];
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
  return this.original;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
  let array = this.nums;
  for (let i = 0; i < array.length; i++) {
    let target = Math.floor(Math.random() * array.length);
    [array[i], array[target]] = [array[target], array[i]];
  }
  return array;
};
