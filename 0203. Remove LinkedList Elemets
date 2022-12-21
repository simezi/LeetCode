
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  while (head != null) {
    if (head.val != val) {
      break;
    }
    head = head.next;
  }

  let current = head;
  while (current != null) {
    if (current.val == val) {
      prev.next = current.next;
    } else {
      prev = current;
    }
    current = current.next;
  }
  return head;
};
