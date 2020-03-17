/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  if (head == null || head.next == null) {
    return head;
  }
  let reversedHead;
  function reverse(node) {
    if (node.next == null) {
      reversedHead = node;
      return node;
    }
    let reverseTail = reverse(node.next);
    reverseTail.next = node;
    node.next = null;
    return node;
  }
  reverse(head);
  return reversedHead;
};
