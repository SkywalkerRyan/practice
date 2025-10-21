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

	if (!fast || !fast.next) return null;

	fast = head;

	while (slow.next) {
		slow = slow.next;
		fast = fast.next;

		if (slow === fast) return slow;
	}

	return null;
}

function lengthOfLoop(head: ListNode | null): ListNode | null {
	if (!head) return 0;
	if (!head.next) return 0;

	let slow = head;
	let fast = head;

	while (fast && fast.next) {
		slow = slow.next;
		fast = fast.next.next;

		if (slow === fast) break;
	}

	if (!fast || !fast.next) return 0;

	fast = head;
	let count = 1;

	while (slow.next) {
		if (slow === fast) return count;
		count++;

		slow = slow.next;
		fast = fast.next;
	}

	return 0;
}

// export function isPalindrome(head: ListNode | null): boolean {
// 	if (!head) return false;
// 	if (!head.next) return true;

// 	let curr = head;
// 	let arr = [];

// 	while (curr.next) {
// 		arr.push(curr.val);
// 		curr = curr.next;
// 	}
// 	arr.push(curr.val);

// 	let len = arr.length - 1;
// 	for (let i = 0; i < len / 2; i++) {
// 		if (arr[i] !== arr[len - i]) return false;
// 	}

// 	return true;
// }

export function isPalindrome(head: ListNode | null): boolean {
	if (!head) return false;
	if (!head.next) return true;

	let slow = head;
	let fast = head;

	let arr = [];

	while (fast && fast.next) {
		arr.push(slow.val);
		slow = slow.next;
		fast = fast.next.next;
	}

	let len = arr.length - 1;
	if (arr[len] !== slow.val) {
		arr.pop();
		len--;
	}

	slow = slow.next;

	while (slow.next) {
		if (arr[len] !== slow.val) {
			return false;
		}

		len--;
		slow = slow.next;
	}

	return true;
}

function oddEvenList(head: ListNode | null): ListNode | null {
	if (!head) return null;
	if (!head.next) return head;

	let odd = head;
	let even = head.next;
	let evenStart = head.next;

	while (even && even.next) {
		odd.next = even;
		odd = odd.next;
		even.next = odd;
		even = even.next;
	}

	odd.next = evenStart;

	return head;
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
	if (!head) return null;

	let curr = head;
	let slow = head;

	for (let i = 0; i < n; i++) curr = curr.next;

	while (curr) {
		curr = curr.next;
		slow = slow.next;
	}

	// if (!slow.next.next) slow.next = null;
	// else
	slow.next = slow.next.next;

	return head;
}
