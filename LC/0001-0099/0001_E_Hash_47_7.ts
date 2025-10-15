function twoSum2(nums: number[], target: number): number[] {
	let map = new Map();
	for (let i = 0; i < nums.length; i++) {
		map.set(nums[i], i);
	}

	for (let i = 0; i < nums.length; i++) {
		const _target = target - nums[i];

		if (map.has(_target) && map.get(_target) !== i) return [i, map.get(_target)];
	}

	return [];
}
