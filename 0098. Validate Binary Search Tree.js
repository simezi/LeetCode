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
var isValidBST = function(root) {
  function walk(root, min, max) {
    if (root == null) {
      return true;
    }

    let leftValid = true,
      rightValid = true;
    if (root.left) {
      leftValid =
        (max == null ? true : root.left.val < max) &&
        (min == null ? true : root.left.val > min) &&
        root.val > root.left.val &&
        walk(root.left, min, root.val);
    }
    if (root.right) {
      rightValid =
        (max == null ? true : root.right.val < max) &&
        (min == null ? true : root.right.val > min) &&
        root.val < root.right.val &&
        walk(root.right, root.val, max);
    }

    return leftValid && rightValid;
  }

  return walk(root, null, null);
};
