// Striver 6.3.9, AlgoMap Lls 05.7

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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
	if (!head) return null;

	let dummy = new ListNode(0, head);

	let curr = dummy;
	let slow = dummy;

	for (let i = 0; i <= n; i++) curr = curr.next;

	while (curr) {
		curr = curr.next;
		slow = slow.next;
	}

	slow.next = slow.next.next;

	return dummy.next;
}
