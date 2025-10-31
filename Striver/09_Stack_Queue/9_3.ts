function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
	let map = new Map();
	let stack = [];

	for (let i = nums2.length - 1; i >= 0; i--) {
		while (stack.length && stack[stack.length - 1] < nums2[i]) {
			stack.pop();
		}

		if (stack.length === 0) map.set(nums2[i], -1);
		else map.set(nums2[i], stack[stack.length - 1]);

		stack.push(nums2[i]);
	}

	let res = [];

	for (let i = 0; i < nums1.length; i++) {
		res.push(map.get(nums1[i]));
	}
	return res;
}

// console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));

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

function nextSmallerElement(nums: number[]): number[] {
	let map = new Map();
	let stack = [];
	let res = [];

	for (let i = nums.length - 1; i >= 0; i--) {
		while (stack.length && stack[stack.length - 1] > nums[i]) {
			stack.pop();
		}

		if (stack.length === 0) res[i] = -1;
		else res[i] = stack[stack.length - 1];

		stack.push(nums[i]);
	}

	return res;
}

console.log(nextSmallerElement([1, 3, 4, 2]));
