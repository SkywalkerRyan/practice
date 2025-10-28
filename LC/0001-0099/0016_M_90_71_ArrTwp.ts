function threeSumClosest(nums: number[], target: number): number {
	nums = nums.sort((a, b) => a - b);
	let res = Infinity;

	for (let i = 0; i < nums.length; i++) {
		if (i > 0 && nums[i] === nums[i - 1]) continue;

		let j = i + 1;
		let k = nums.length - 1;

		while (j < k) {
			let sum = nums[i] + nums[j] + nums[k];
			let temp = Math.abs(target - sum);

			if (Math.abs(target - res) > temp) res = sum;

			if (sum > target) k--;
			else if (sum < target) j++;
			else return target;
		}
	}

	return res;
}

// console.log(threeSumClosest([-1, 2, 1, -4], 1));
console.log(threeSumClosest([0, 0, 0], 1));
