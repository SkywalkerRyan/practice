function getSneakyNumbers(nums: number[]): number[] {
	let set = new Set();
	let res = [];

	for (let i = 0; i < nums.length; i++) {
		if (set.has(nums[i])) {
			res.push(nums[i]);
		} else {
			set.add(nums[i]);
		}
	}

	return res;
}
