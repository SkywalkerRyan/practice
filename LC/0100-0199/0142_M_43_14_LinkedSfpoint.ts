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

function detectCycle(head: ListNode | null): ListNode | null {
	if (!head) return null;
	if (!head.next) return null;

	let slow = head;
	let fast = head;

	while (fast && fast.next) {
		slow = slow.next;
		fast = fast.next.next;

		if (slow === fast) break;
	}

	if (!fast.next || !fast.next.next) return null;

	fast = head;

	while (slow.next) {
		slow = slow.next;
		fast = fast.next;

		if (slow === fast) return slow;
	}

	return null;
}
