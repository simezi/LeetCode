/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  let current = head;
  let resultHead = new ListNode(null);
  let result = resultHead;
  if (k === 1) {
    return head;
  }

  if (head == null || head.next == null) {
    return head;
  }

  while (current != null) {
    let stack = [];
    for (let i = 0; i < k && current != null; i++) {
      stack.push(current);
      current = current.next;
      if (current == null && i != k - 1) {
        result.next = stack.shift();
        return resultHead.next;
      }
    }
    while (stack.length > 0) {
      result.next = stack.pop();
      result = result.next;
    }
  }
  result.next = undefined;
  return resultHead.next;
};
