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
var mergeTwoLists = function (list1, list2)
{
	return merger(list1, list2)
};

var merger = function (list1, list2)
{
	if (!list1) return list2;
	if (!list2) return list1;

	if (list1.val > list2.val)
	{
		list2.next = merger(list1, list2.next)
		return list2;
	}
	else
	{
		list1.next = merger(list1.next, list2)
		return list1;
	}
}