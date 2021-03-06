/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    const answer= new ListNode();
    let head = answer;
    
    while (list1 || list2){
        if (!list1){
            head.next = new ListNode(list2.val); 
            list2 = list2.next;
        }
        else if (!list2){
            head.next = new ListNode(list1.val); 
            list1 = list1.next;
        }
        else if (list2.val <= list1.val){
            head.next = new ListNode(list2.val); 
            list2 = list2.next;
        }
        else if (list1.val < list2.val){
            head.next = new ListNode(list1.val); 
            list1 = list1.next;
        }
        head = head.next;
    }
    return answer.next;
};