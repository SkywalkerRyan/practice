function majorityElement(nums: number[]): number[] {
	let map = new Map();
	let set: Set<number> = new Set();

	const len: number = nums.length / 3;

	for (let i = 0; i < nums.length; i++) {
		map.set(nums[i], (map.get(nums[i]) || 0) + 1);
		if (map.get(nums[i]) > len) set.add(nums[i]);
	}

	return Array.from(set);
}
