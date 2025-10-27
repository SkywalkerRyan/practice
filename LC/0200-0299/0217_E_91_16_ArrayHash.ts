function containsDuplicate(nums: number[]): boolean {
	let map = new Map();

	for (let i = 0; i < nums.length; i++) {
		if (map.has(nums[i])) return true;

		map.set(nums[i], 1);
	}

	return false;
}
