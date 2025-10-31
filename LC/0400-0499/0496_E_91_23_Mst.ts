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

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));
