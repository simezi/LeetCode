/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    function listToBigInt(l) {
        let ret = []
        let current = l
        while(current != null) {
            ret.push(current.val)
            current = current.next
        }
        return BigInt(ret.reverse().join(""))
    }
    
    function numberToList(n) {
        const str = "" + n
        const array =  str.split("").reverse()
        const nodes = array.map(num => new ListNode(num))
        for(let i = 0; i < nodes.length - 1; i++) {
            nodes[i].next = nodes[i+1]
        }
        return nodes[0]
    }
    return numberToList(listToBigInt(l1) + listToBigInt(l2))
};
