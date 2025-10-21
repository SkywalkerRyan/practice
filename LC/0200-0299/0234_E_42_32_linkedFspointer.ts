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

function isPalindrome(head: ListNode | null): boolean {
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

	if (fast) slow = slow.next;

	let len = arr.length - 1;

	while (slow) {
		if (arr[len] !== slow.val) {
			return false;
		}

		slow = slow.next;
		len--;
	}

	return true;
}
