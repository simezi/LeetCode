/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  while (headA != null) {
    headA.visited = true;
    headA = headA.next;
  }
  while (headB != null) {
    if (headB.visited) {
      return headB;
    }
    headB = headB.next;
  }

  return null;
};
