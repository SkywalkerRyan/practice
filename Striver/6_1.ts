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
