/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head)
{
	if (!head) return null;

	let newNode = { val: head.val, next: null };
	let current = head;

	while (current.next)
	{
		let temp = newNode;
		console.log("newNode : ", newNode);
		console.log("current 1 : ", current);
		newNode.val = current.val;
		console.log("newNode 2 : ", newNode);
		newNode.next = temp;
		console.log("newNode 3 : ", newNode);

		current = current.next;
	}

	return newNode;
};

// const testVal = { val: 0, next: null }
const testVal = { val: 1, next: { val: 2, next: null } }
// const testVal = { val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: { val: 5, next: null } } } } }

console.log(reverseList(testVal))