function missingNumber(nums: number[]): number {
	let len: number = nums.length;
	let sum: number = (len * (len + 1)) / 2;

	for (let i = 0; i < nums.length; i++) {
		sum -= nums[i];
	}

	return sum;
}

console.log(missingNumber([0, 2, 3, 1, 4]));
// console.log(missingNumbers([0, 1, 2, 4, 5, 6]));
