class MyQueue {
	vals: number[];
	length: number;

	constructor() {
		this.vals = [];
		this.length = 0;
	}

	push(val: number): void {
		this.vals[this.length] = val;
		this.length++;
	}

	pop(): number {
		this.length--;
		return this.vals.shift();
	}

	peek(): number {
		return this.vals[0];
	}

	empty(): boolean {
		return this.length === 0;
	}
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
