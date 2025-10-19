import { Node as ListNode } from '../Practices/LinkedListDouble/node.js';

function insertAtEnd(head: ListNode, X: number): void {
	let curr: ListNode = head;

	while (curr.next) {
		curr = curr.next;
	}

	let temp = new ListNode(X);
	temp.next = null;
	temp.prev = curr;

	curr.next = temp;
}

function insertBeforeHead(head: ListNode, X: number): void {
	let curr: ListNode = head;

	let temp = new ListNode(X);
	temp.next = curr;
	temp.prev = null;

	curr.prev = temp;

	head = temp;
}
