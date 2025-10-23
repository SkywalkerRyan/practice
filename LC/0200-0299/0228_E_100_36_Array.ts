function summaryRanges(nums: number[]): string[] {
	if (nums.length === 0) return [];

	let res = [];
	let len = nums.length;
	let temp = 0;

	for (let i = 1; i <= len; i++) {
		if (nums[i] - nums[i - 1] > 1) {
			if (i - 1 === temp) res.push(nums[temp].toString());
			else res.push(nums[temp] + '->' + nums[i - 1]);

			temp = i;
		}
	}

	if (len - 1 === temp) res.push(nums[temp].toString());
	else res.push(nums[temp] + '->' + nums[len - 1]);

	return res;
}
