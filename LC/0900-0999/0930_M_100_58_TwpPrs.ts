function numSubarraysWithSum(nums: number[], goal: number): number {
	return atMost(nums, goal) - atMost(nums, goal - 1);
}

function atMost(nums: number[], goal: number) {
	if (goal < 0) return 0;

	let left = 0;
	let sum = 0;
	let res = 0;

	for (let right = 0; right < nums.length; right++) {
		sum += nums[right];

		while (sum > goal) {
			sum -= nums[left];
			left++;
		}

		res += right - left + 1;
	}

	return res;
}

console.log(numSubarraysWithSum([1, 0, 1, 0, 1], 1));
