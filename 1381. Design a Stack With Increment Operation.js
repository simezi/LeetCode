/**
 * @param {number} maxSize
 */
var CustomStack = function(maxSize) {
  this.maxSize = maxSize;
  this.size = 0;
  this.body = [];
};

/**
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function(x) {
  if (this.size >= this.maxSize) {
    return;
  }
  this.body.push(x);
  this.size++;
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function() {
  if (this.size === 0) {
    return -1;
  }
  this.size--;
  return this.body.pop();
};

/**
 * @param {number} k
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function(k, val) {
  let count = Math.min(k, this.size);
  for (let i = 0; i < count; i++) {
    this.body[i] += val;
  }
};
