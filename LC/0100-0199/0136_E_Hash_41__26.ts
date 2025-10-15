function singleNumber(nums: number[]): number {
	const map = new Map();
	for (let i = 0; i < nums.length; i++) {
		const num = nums[i];
		map.set(num, (map.get(num) || 0) + 1);
	}

	for (const [key, val] of map) {
		if (val === 1) return key;
	}

	return 0;
}
// console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([4, 1, 2, 1, 2]));
// console.log(singleNumber([1]));
