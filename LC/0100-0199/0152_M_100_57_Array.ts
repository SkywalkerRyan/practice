function maxProduct2(nums: number[]): number {
	let highest: number = nums[0];
	let curMax: number = 1;
	let curMin: number = 1;

	for (let i = 0; i < nums.length; i++) {
		let tempMax = curMax * nums[i];
		let tempMin = curMin * nums[i];

		curMax = Math.max(tempMax, tempMin, nums[i]);
		curMin = Math.min(tempMax, tempMin, nums[i]);

		highest = Math.max(highest, curMax);
	}

	return highest;
}

console.log(maxProduct2([2, 3, -2, 4]));
console.log(maxProduct2([-2, 0, -1]));
console.log(maxProduct2([-2]));
console.log(maxProduct2([0, 2]));
