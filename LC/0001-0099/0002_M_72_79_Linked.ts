/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
	let temp = new ListNode();
	let curr = temp;
	let total = 0;
	let carry = 0;

	while (l1 || l2 || carry) {
		total = carry;

		if (l1) {
			total += l1.val;
			l1 = l1.next;
		}

		if (l2) {
			total += l2.val;
			l2 = l2.next;
		}

		let sum = total % 10;
		carry = Math.floor(total / 10);

		temp.next = new ListNode(sum);
		temp = temp.next;
	}

	return curr.next;
}
