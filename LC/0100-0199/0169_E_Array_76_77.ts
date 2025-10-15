function majorityElement(nums: number[]): number {
	let map = new Map();

	for (let i = 0; i < nums.length; i++) {
		map.set(nums[i], (map.get(nums[i]) || 0) + 1);
		if (map.get(nums[i]) > nums.length / 2) return nums[i];
	}

	// for (const [key, val] of map) {
	// 	if (val > nums.length / 2) return key;
	// }

	return 0;
}

console.log(majorityElement([7, 0, 0, 1, 7, 7, 2, 7, 7]));
console.log(majorityElement([1, 1, 1, 2, 1, 2]));
