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

function modifiedList(nums: number[], head: ListNode | null): ListNode | null {
	if (!nums.length) return head;

	let set = new Set(nums);

	let dummy = new ListNode(0, head);

	let prev = dummy;
	let curr = head;

	while (curr) {
		if (set.has(curr.val)) {
			prev.next = curr.next;
			curr = curr.next;
		} else {
			prev = curr;
			curr = curr.next;
		}
	}

	return dummy.next;
}
