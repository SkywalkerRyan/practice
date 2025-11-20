// Striver 6.3.2, AlgoMap Lls 05.3

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

function reverseList(head: ListNode | null): ListNode | null {
	if (!head) return null;
	if (!head.next) return head;

	let prev: ListNode = head;
	let curr: ListNode = head.next;

	prev.next = null;

	while (curr.next) {
		let temp = curr.next;
		curr.next = prev;
		prev = curr;
		curr = temp;
	}

	curr.next = prev;

	return curr;
}
