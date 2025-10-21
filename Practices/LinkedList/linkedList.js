import { Node } from './node.js';

// const Node = require('./node')

/*
// append | insertAtTail
// prepend | insertAtHead
// insert | insertAtPos

// clearList
// deleteHead
// deleteTail
// deleteAtPos

search
// printList
getSize
*/

export class LinkedList {
	constructor() {
		this.head = null;
		this.size = 0;
	}

	append(val) {
		const newNode = new Node(val);

		this.size++;
		if (!this.head) {
			this.head = newNode;
			return;
		}

		let current = this.head;

		while (current.next) current = current.next;

		current.next = newNode;
	}

	prepend(val) {
		const newNode = new Node(val);

		this.size++;
		newNode.next = this.head;
		this.head = newNode;
	}

	insert(pos, val) {
		this.size++;

		if (pos == 0) {
			this.prepend(val);
			return;
		}

		const newNode = new Node(val);
		let current = this.head;

		for (let i = 1; i <= pos - 1; i++) {
			if (i == pos - 1) {
				newNode.next = current.next;
				current.next = newNode;
			}

			current = current.next;
		}
	}

	deleteHead() {
		this.size--;

		let current = this.head;
		this.head = current.next;
	}

	deleteTail() {
		this.size--;

		let current = this.head;
		let last = null;

		while (current.next) {
			last = current;
			current = current.next;
		}
		last.next = null;
	}

	deleteAtPos(pos) {
		this.size--;

		if (pos == 0) this.deleteHead();

		let last = null;
		let current = this.head;

		for (let i = 1; i < pos; i++) {
			last = current;
			current = current.next;

			if ((i = pos - 1)) {
				last.next = current.next;
			}
		}
	}

	clearList() {
		this.head = null;
		this.size = 0;
	}

	printList() {
		let current = this.head;

		let result = '';

		while (current) {
			result += current.val + '->';
			current = current.next;
		}
		console.log(result + 'end');
	}

	isPalindrome() {
		let head = this.head;

		let slow = head;
		let fast = head;

		let arr = [];

		while (fast && fast.next) {
			arr.push(slow.val);
			slow = slow.next;
			fast = fast.next.next;
		}

		console.log('arr 1 : ', arr);
		console.log('slow : ', slow);

		if (fast) slow = slow.next;

		let len = arr.length - 1;
		// if (arr[len] !== slow.val) {
		// 	slow = slow.next;
		// }
		// console.log('arr 2 : ', arr);

		while (slow) {
			console.log('i : ', arr[len]);
			console.log('val : ', slow.val);

			if (arr[len] !== slow.val) {
				return false;
			}

			// if (!slow.next) break;
			slow = slow.next;
			len--;
		}

		return true;

		// if (!head || !head.next) return false;

		// let curr = head;
		// let arr = [];

		// while (curr.next) {
		// 	arr.push(curr.val);
		// 	curr = curr.next;
		// }
		// arr.push(curr.val);

		// console.log('arr : ', arr);

		// let len = arr.length - 1;
		// for (let i = 0; i < len / 2; i++) {
		// 	if (arr[i] !== arr[len - i]) return false;
		// }

		// return true;
	}
}
