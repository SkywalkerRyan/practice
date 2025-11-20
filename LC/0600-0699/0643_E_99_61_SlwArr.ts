function findMaxAverage(nums: number[], k: number): number {
	let win = 0;

	for (let i = 0; i < k; i++) {
		win += nums[i];
	}

	let res = win;

	for (let i = k; i < nums.length; i++) {
		win += nums[i] - nums[i - k];
		res = Math.max(res, win);
	}

	return res / k;
}

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));
console.log(findMaxAverage([5], 1));
