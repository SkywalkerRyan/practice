function maxProfit(nums: number[]): number {
	let profit = 0;

	for (let i = 1; i < nums.length; i++) {
		if (nums[i] > nums[i - 1]) profit += nums[i] - nums[i - 1];
	}
	return profit;
}

// console.log(maxProfit([7, 1, 5, 3, 6, 4]));
