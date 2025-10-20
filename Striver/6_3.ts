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

//
//
//

// function hasCycle(head: ListNode | null): boolean {
// 	if (!head || !head.next) return false;

// 	let curr: ListNode = head;

// 	let map: number[] = [];
// 	let count = 0;
// 	let id = 0;

// 	while (curr.next) {
// 		if (count > 0) {

// 		}
// 		if (map.includes(curr.val)) {
// 			count++;
// 			id = map.indexOf(curr.val);
// 		}

// 		map.push(curr.val);

// 		curr = curr.next;
// 	}

// 	return false;
// }

function hasCycle(head: ListNode | null): boolean {
	if (!head) return null;
	if (!head.next) return false;

	let slow = head;
	let fast = head;

	while (fast && fast.next) {
		if (slow === fast) return true;

		slow = slow.next;
		fast = fast.next.next;
	}

	return false;
}
