function threeSum(nums: number[]): number[][] {
	let newArr: number[][] = [];
	nums = nums.sort((a, b) => a - b);

	for (let i = 0; i < nums.length; i++) {
		if (i > 0 && nums[i] === nums[i - 1]) continue;

		let j = i + 1;
		let k = nums.length - 1;
		while (j < k) {
			let sum = nums[i] + nums[j] + nums[k];
			if (sum > 0) k--;
			else if (sum < 0) j++;
			else {
				newArr.push([nums[i], nums[j], nums[k]]);

				while (j < k && nums[j] === nums[j + 1]) j++;
				while (j < k && nums[k] === nums[k - 1]) k--;

				j++;
				k--;
			}
		}
	}

	return newArr;
}
