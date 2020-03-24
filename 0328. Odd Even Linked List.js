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
var oddEvenList = function(head) {
  if (!head) {
    return null;
  }
  let root = head;
  let tail = head;
  let evenHead = new ListNode(null);
  let evenCurrent = evenHead;
  while (head != null) {
    let even = head.next;
    let odd = even ? even.next : null;
    head.next = odd;
    if (even) {
      even.next = null;
    }
    evenCurrent.next = even;
    evenCurrent = evenCurrent.next;
    if (odd == null) {
      break;
    }
    head = head.next;
    if (head) {
      tail = head;
    }
  }
  tail.next = evenHead.next;
  return root;
};
