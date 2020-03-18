/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  let result = [];
  let queue = [root];
  while (queue.length > 0) {
    let length = queue.length;
    let values = [];
    for (let i = 0; i < length; i++) {
      let current = queue.shift();
      if (current) {
        values.push(current.val);
        queue.push(current.left);
        queue.push(current.right);
      }
    }
    values.length > 0 && result.push(values);
  }
  return result;
};
