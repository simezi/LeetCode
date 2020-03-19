/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.stack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  let min;
  if (this.stack.length === 0) {
    min = x;
  } else {
    min = x < this.getMin() ? x : this.getMin();
  }
  this.stack.push([x, min]);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  return this.stack.pop()[0];
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  if (this.stack.length === 0) {
    return null;
  }
  return this.stack[this.stack.length - 1][0] || null;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  if (this.stack.length === 0) {
    return null;
  }
  return this.stack[this.stack.length - 1][1];
};
