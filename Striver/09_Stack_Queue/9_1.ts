class Stacks {
	vals: number[];
	length: number;

	constructor() {
		this.vals = [];
		this.length = 0;
	}

	push(val) {
		this.vals[this.length] = val;
		this.length++;
	}

	pop() {
		if (this.length === 0) return undefined;
		this.length--;
		return this.vals[this.length];
	}

	top() {
		return this.vals[this.length - 1];
	}

	size() {
		return this.length;
	}
}

// let stack = new Stacks();

// stack.push(5);
// console.log(stack.top());
// console.log(stack.size());
// console.log(stack.pop());

class Queue {
	vals: number[];
	length: number;

	constructor() {
		this.vals = [];
		this.length = 0;
	}

	push(val) {
		this.vals[this.length] = val;
		this.length++;
	}

	pop() {
		this.length--;
		return this.vals.shift();
	}

	top() {
		return this.vals[0];
	}

	size() {
		return this.length;
	}
}

// let queue = new Queue();

// queue.push(5);
// console.log(queue.top());
// console.log(queue.size());
// console.log(queue.pop());

import { Node } from '../../Practices/LinkedList/node.js';
class StacksL {
	head: Node | null;
	length: number;

	constructor() {
		this.head = null;
		this.length = 0;
	}

	push(val): void {
		let temp = new Node(val);
		this.length++;

		if (this.length === 1) {
			this.head = temp;
			return;
		}

		let curr = this.head;
		while (curr.next) {
			curr = curr.next;
		}
		curr.next = temp;
	}

	pop(): Node {
		let prev = this.head;
		let curr = this.head;
		this.length--;

		while (curr.next) {
			prev = curr;
			curr = curr.next;
		}
		prev.next = null;

		return curr;
	}

	top(): Node {
		let curr = this.head;

		while (curr.next) {
			curr = curr.next;
		}

		return curr;
	}

	isEmpty(): boolean {
		return this.length === 0;
	}

	size(): number {
		return this.length;
	}
}

// let stack = new StacksL();

// stack.push(6);
// console.log(stack.top());
// console.log(stack.size());
// console.log(stack.pop());

class QueueL {
	head: Node | null;
	length: number;

	constructor() {
		this.head = null;
		this.length = 0;
	}

	push(val): void {
		let temp = new Node(val);
		this.length++;

		if (this.length === 1) {
			this.head = temp;
			return;
		}

		let curr = this.head;
		while (curr.next) {
			curr = curr.next;
		}
		curr.next = temp;
	}

	pop(): Node {
		let temp = this.head;
		this.length--;

		this.head = this.head.next;

		return temp;
	}

	top(): Node {
		return this.head;
	}

	isEmpty(): boolean {
		return this.length === 0;
	}

	size(): number {
		return this.length;
	}
}

// let queue = new QueueL();

// queue.push(5);
// console.log(queue.top());
// console.log(queue.size());
// console.log(queue.pop());

function isValid(s: string): boolean {
	let stack = [];

	for (let char of s) {
		if (char === '(' || char === '{' || char === '[') stack.push(char);
		else {
			if (ParMap.get(char) !== stack.pop()) return false;
		}
	}

	return stack.length === 0;
}
const ParMap = new Map([
	// ['(', '('],
	[')', '('],
	// ['{', '{'],
	['}', '{'],
	// ['[', '['],
	[']', '['],
]);

// console.log(isValid('()'));

class MinStack {
	vals: number[];
	mins: number[];
	length: number;

	constructor() {
		this.vals = [];
		this.mins = [];
		this.length = 0;
	}

	push(val: number) {
		this.vals[this.length] = val;
		if (this.length === 0) this.mins[this.length] = val;
		else this.mins[this.length] = Math.min(this.mins[this.length - 1], val);

		this.length++;
	}

	pop() {
		if (this.length === 0) return undefined;
		this.length--;
	}

	top() {
		return this.vals[this.length - 1];
	}

	size() {
		return this.length;
	}

	getMin(): number {
		return this.mins[this.length - 1];
	}
}
