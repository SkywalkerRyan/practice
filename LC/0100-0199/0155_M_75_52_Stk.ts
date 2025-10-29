class MinStack {
	vals: number[];
	mins: number[];
	length: number;

	constructor() {
		this.vals = [];
		this.mins = [];
		this.length = 0;
	}

	push(val: number): void {
		this.vals[this.length] = val;
		if (this.length === 0) this.mins[this.length] = val;
		else this.mins[this.length] = Math.min(this.mins[this.length - 1], val);

		this.length++;
	}

	pop(): void {
		if (this.length === 0) return undefined;
		this.length--;
		// return this.vals[this.length];
	}

	top(): number {
		return this.vals[this.length - 1];
	}

	getMin(): number {
		if (this.length === 0) return 0;
		return this.mins[this.length - 1];
	}
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
