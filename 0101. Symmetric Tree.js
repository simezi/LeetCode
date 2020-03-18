/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  let queue = [root];
  while (queue.length > 0) {
    let values = [];
    let length = queue.length;
    for (let i = 0; i < length; i++) {
      let current = queue.shift();
      values.push(current ? current.val : null);
      if (current) {
        queue.push(current.left);
        queue.push(current.right);
      }
    }

    if (values.join(",") != values.reverse().join(",")) {
      return false;
    }
    if (queue.every(x => x == null)) {
      break;
    }
  }
  return true;
};
