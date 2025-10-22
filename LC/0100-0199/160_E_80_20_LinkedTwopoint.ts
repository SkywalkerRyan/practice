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

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
	let currA = headA;
	let currB = headB;

	let mapA = new Map();

	while (currA) {
		mapA.set(currA, (mapA.get(currA) || 0) + 1);

		currA = currA.next;
	}

	while (currB) {
		if (mapA.has(currB)) {
			return currB;
		}
		currB = currB.next;
	}

	return null;
}
