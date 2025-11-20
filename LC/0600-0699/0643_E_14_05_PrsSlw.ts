function findMaxAverage(nums: number[], k: number): number {
	let res = -Infinity;
	let len = nums.length;
	let pSum = [0];

	for (let i = 0; i < len; i++) {
		let sum = pSum[i] + nums[i];
		pSum.push(sum);
	}

	let left = 0;
	let right = k;

	while (right <= len) {
		let _res = pSum[right] - pSum[left];

		res = Math.max(res, _res / k);

		left++;
		right++;
	}

	return res;
}

// console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));
console.log(findMaxAverage([5], 1));
