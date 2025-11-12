function longestOnes(nums: number[], k: number): number {
	let left = 0;
	let right = 0;

	let zero = 0;
	let res = 0;

	while (right < nums.length) {
		nums[right] === 0 ? zero++ : null;

		while (zero > k) {
			nums[left] === 0 ? zero-- : null;
			left++;
		}
		right++;
		res = Math.max(res, right - left);
	}

	return res;
}

// console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2));
// console.log(longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3));
