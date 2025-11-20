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

	let fast: ListNode = head;
	let slow: ListNode = head;

	while (fast && fast.next) {
		slow = slow.next;
		fast = fast.next.next;
	}

	return slow;
}
