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
import { Node as ListNode } from '../Practices/LinkedList/node.js';

// function middleNode(head: ListNode | null): ListNode | null {
// 	if (!head.next) return head;

// 	let count: number = 1;
// 	let curr = head;

// 	while (curr.next) {
// 		count++;
// 		curr = curr.next;
// 	}

// 	if (count === 2) return head.next;

// 	curr = head;
// 	count = Math.floor(count / 2);
// 	let _count: number = 0;
// 	while (curr.next) {
// 		_count++;
// 		if (_count > count) return curr;
// 		curr = curr.next;
// 	}
// }

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
