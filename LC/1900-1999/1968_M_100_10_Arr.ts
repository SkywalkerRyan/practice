// LC 1968
// O(n^2), O(1)
function rearrangeArray(nums: number[]): number[] {
	let i = 1;
	while (i < nums.length - 1) {
		if (nums[i] === (nums[i - 1] + nums[i + 1]) / 2) {
			[nums[i - 1], nums[i]] = [nums[i], nums[i - 1]];
			i = Math.max(1, i - 2);
		} else i++;
	}
	return nums;
}
