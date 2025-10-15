// Kadane's algorithm

function maxSubArray(nums: number[]): number {
	let highest: number = nums[0];
	let temp: number = nums[0];

	for (let i = 1; i < nums.length; i++) {
		if (temp < 1) temp = 0;
		temp = temp + nums[i];
		if (temp > highest) highest = temp;
	}

	return highest;
}

console.log(maxSubArray([-2, 1]));
// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
