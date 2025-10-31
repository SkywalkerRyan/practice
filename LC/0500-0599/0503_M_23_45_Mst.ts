function nextGreaterElements(nums: number[]): number[] {
	let stk = [];
	let res = [];
	let len = nums.length;

	for (let i = len * 2 - 1; i >= 0; i--) {
		let idx = i % len;
		let num = nums[idx];
		while (stk.length && stk[stk.length - 1] <= num) {
			stk.pop();
		}

		if (!stk.length) res[idx] = -1;
		else res[idx] = stk[stk.length - 1];

		stk.push(num);
	}

	return res;
}
