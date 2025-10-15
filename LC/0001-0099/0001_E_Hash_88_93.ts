function twoSum3(nums: number[], target: number): number[] {
	let map = new Map();
	for (let i = 0; i < nums.length; i++) {
		const _target = target - nums[i];
		if (map.has(_target)) return [i, map.get(_target)];

		map.set(nums[i], i);
	}

	return [];
}
