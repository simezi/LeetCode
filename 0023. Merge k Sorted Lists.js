/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  if (lists.length === 1) {
    return lists[0];
  }
  const head = new ListNode(undefined);
  let current = head;
  while (lists.findIndex(list => list != null) != -1) {
    let minIndex;
    for (let i = 0; i < lists.length; i++) {
      if (lists[i] == null) {
        continue;
      }

      if (minIndex == undefined) {
        minIndex = i;
      }

      if (lists[minIndex].val > lists[i].val) {
        minIndex = i;
      }
    }
    current.next = lists[minIndex];
    current = current.next;
    lists[minIndex] = lists[minIndex].next;
  }

  return head.next;
};
