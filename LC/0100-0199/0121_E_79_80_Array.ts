function maxProfit(nums: number[]): number {
	let min: number = nums[0];
	let profit: number = 0;

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] < min) min = nums[i];

		profit = Math.max(profit, nums[i] - min);
	}

	return profit;
}

console.log(maxProfit([7, 2, 7, 1, 5, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
