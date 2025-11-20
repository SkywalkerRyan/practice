// Striver 6.3.1, AlgoMap Lls 05.6

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

function middleNode(head: ListNode | null): ListNode | null {
	if (!head.next) return head;

	let count: number = 1;
	let curr = head;

	while (curr.next) {
		count++;
		curr = curr.next;
	}

	if (count === 2) return head.next;

	curr = head;
	count = Math.floor(count / 2);
	let _count: number = 0;
	while (curr.next) {
		_count++;
		if (_count > count) return curr;
		curr = curr.next;
	}
}
