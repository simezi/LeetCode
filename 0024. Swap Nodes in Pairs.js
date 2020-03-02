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
var swapPairs = function(head) {
  if (head == null || head.next == null) {
    return head;
  }
  let current = head;
  const SENTI = new ListNode(null);
  let prev = SENTI;
  while (current != null && current.next != null) {
    let first = current;
    let second = first.next;
    let third = second != null ? second.next : undefined;

    prev.next = second;
    second.next = first;
    first.next = third;
    prev = current;
    current = third;
  }
  return SENTI.next;
};
