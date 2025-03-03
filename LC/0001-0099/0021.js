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
var mergeTwoLists = function( list1, list2 ) 
{
    let newList = { val: -1, next: null };
    let current = newList;

    while( list1 && list2 )
    {
        if( list1.val > list2.val )
        {
            current.next = list2;
            list2 = list2.next;
        }
        else
        {
            current.next = list1;
            list1 = list1.next;
        }
        current = current.next;
    }

    current.next = list1 || list2;

    return newList.next;
};

console.log( mergeTwoLists( [1, 2, 4], [1, 3, 4] ) );
// console.log( mergeTwoLists( [], [] ) );
// console.log( mergeTwoLists( [], [0] ) );