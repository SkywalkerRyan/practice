function findMaxAverage(nums: number[], k: number): number {
	let res = 0;
	let len = nums.length;
	let left = 0;
	let right = k - 1;

	while (right < len) {
		let sum = 0;
		for (let i = left; i <= right; i++) {
			sum += nums[i];
		}
		if (res !== 0) res = Math.max(res, sum / k);
		else res = sum / k;
		left++;
		right++;
	}

	return res;
}

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));
