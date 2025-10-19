import { Node as ListNode } from '../Practices/LinkedList/node.js';

class LinkedList {
	insertAtHead(head, X) {
		let temp = new ListNode(X, head);
		return temp;
	}
}

function deleteNode(node: ListNode | null): void {
	node.val = node.next.val;
	node.next = node.next.next;
}

function deleteLastNode(head: ListNode) {
	let prev = head;
	let curr = head.next;

	while (curr.next) {
		prev = curr;
		curr = curr.next;
	}

	prev.next = null;
}

function countLength(head: ListNode): number {
	let count: number = 0;
	let curr = head;

	while (curr.next) {
		count++;
		curr = curr.next;
	}

	return count;
}

function searchKey(head: ListNode | null, key: number): boolean {
	let curr: ListNode = head;

	while (curr.next) {
		if (key === curr.val) return true;

		curr = curr.next;
	}

	return false;
}
