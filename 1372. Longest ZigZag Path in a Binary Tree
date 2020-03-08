/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestZigZag = function(root) {
  function findLength(node, prevLeft) {
    if (node.left == null && node.right == null) {
      return 0;
    }
    if (prevLeft && node.right) {
      const result = 1 + findLength(node.right, !prevLeft);
      node.visited = result;
      return result;
    } else if (!prevLeft && node.left) {
      const result = 1 + findLength(node.left, !prevLeft);
      node.visited = result;
      return result;
    }
    return 0;
  }
  let stack = [root];
  let result = 0;
  while (stack.length > 0) {
    const current = stack.pop();
    const visited =
      current.visited != null &&
      (current.left == null || current.right == null);
    if (!visited) {
      const resultR = findLength(current, true);
      const resultL = findLength(current, false);
      const larger = Math.max(resultR, resultL);
      if (larger > result) {
        result = larger;
      }
    }

    if (current.left) {
      stack.push(current.left);
    }
    if (current.right) {
      stack.push(current.right);
    }
  }
  return result;
};
