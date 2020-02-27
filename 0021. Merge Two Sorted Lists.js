/**
 * recursive version
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  if (l1 == null) {
    return l2;
  }
  if (l2 == null) {
    return l1;
  }

  if (l1.val < l2.val) {
    return {
      val: l1.val,
      next: mergeTwoLists(l1.next, l2)
    };
  } else {
    return {
      val: l2.val,
      next: mergeTwoLists(l1, l2.next)
    };
  }
};


/**
plain version
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  if (l1 == null) {
    return l2;
  }
  if (l2 == null) {
    return l1;
  }
  let head1 = l1;
  let head2 = l2;
  let result;
  if (head1.val < head2.val) {
    result = head1;
    head1 = head1.next;
  } else {
    result = head2;
    head2 = head2.next;
  }
  let current = result;

  while (head1 != null || head2 != null) {
    if (head1 == null) {
      current.next = head2;
      break;
    }

    if (head2 == null) {
      current.next = head1;
      break;
    }

    if (head1.val < head2.val) {
      current.next = head1;
      head1 = head1.next;
    } else {
      current.next = head2;
      head2 = head2.next;
    }
    current = current.next;
  }
  return result;
};
