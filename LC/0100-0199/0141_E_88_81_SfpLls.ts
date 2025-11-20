// Striver 6.3.4, AlgoMap Lls 05.5

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

import { Node as ListNode } from '../../Practices/LinkedList/node.js';

function hasCycle(head: ListNode | null): boolean {
	if (!head) return false;
	if (!head.next) return false;

	let slow = head;
	let fast = head;

	while (fast && fast.next) {
		slow = slow.next;
		fast = fast.next.next;

		if (slow === fast) return true;
	}

	return false;
}
