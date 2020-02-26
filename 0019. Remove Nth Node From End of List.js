/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  if (n == 0) {
    return head;
  }
  let current = head;
  let prev;
  for (let i = 1; current != null; i++) {
    current = current.next;

    if (prev) {
      prev = prev.next;
    }
    if (n == i - 1) {
      prev = head;
    }
  }
  if (!prev) {
    return head.next;
  }
  prev.next = prev.next.next;

  return head;
};
