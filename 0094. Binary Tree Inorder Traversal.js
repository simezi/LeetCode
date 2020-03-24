/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  if (!root) {
    return [];
  }
  let stack = [root];
  let result = [];
  while (stack.length > 0) {
    let current = stack[stack.length - 1];
    if (current == null) {
      stack.pop();
      continue;
    }
    if (current.left) {
      stack.push(current.left);
      current.left = null;
      continue;
    } else {
      stack.pop();
      result.push(current.val);
      stack.push(current.right);
    }
  }
  return result;
};
