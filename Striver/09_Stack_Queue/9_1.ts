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

let queue = new Queue();

queue.push(5);
console.log(queue.top());
console.log(queue.size());
console.log(queue.pop());
