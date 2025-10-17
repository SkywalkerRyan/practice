function threeSum(nums: number[]): number[][] {
	let newArr = [];
	nums = nums.sort((a, b) => a - b);

	for (let i = 0; i < nums.length; i++) {
		let j = i + 1;
		let k = nums.length - 1;
		while (j < k) {
			// while (nums[j] === nums[j - 1]) j++;
			// while (nums[k - 1] === nums[k]) k--;

			if (nums[i] + nums[j] + nums[k] > 0) k--;
			else if (nums[i] + nums[j] + nums[k] < 0) j++;
			else {
				newArr.push([nums[i], nums[j], nums[k]]);
				j++;
				k--;
			}
		}
	}
	newArr = [...new Set(newArr.map((arr) => JSON.stringify(arr)))].map((str) => JSON.parse(str));

	return Array.from(newArr);
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
