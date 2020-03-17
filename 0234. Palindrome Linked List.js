/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  let memo = [];
  while (head != null) {
    memo.push(head.val);
    head = head.next;
  }

  return memo.join("") == memo.reverse().join("");
};
