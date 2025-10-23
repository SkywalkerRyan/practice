function findClosestNumber1(nums: number[]): number {
	let closest = nums[0];

	for (let i = 0; i < nums.length; i++) {
		if (Math.abs(nums[i]) < Math.abs(closest)) {
			closest = nums[i];
		}
		if (Math.abs(nums[i]) === Math.abs(closest)) {
			closest = Math.max(nums[i], closest);
		}
	}

	return closest;
}

console.log(findClosestNumber1([2, 1, 1, -1, 100000]));
// console.log(findClosestNumber1([2, -1, 1]));
// console.log(findClosestNumber1([-100000, -100000]));
