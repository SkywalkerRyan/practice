function numberOfSubarrays(nums: number[], k: number): number {
	return atMost2(nums, k) - atMost(nums, k - 1);
}

function atMost2(nums: number[], k: number): number {
	let left = 0;
	let sum = 0;
	let res = 0;

	for (let right = 0; right < nums.length; right++) {
		sum += nums[right] % 2;

		while (sum > k) {
			sum -= nums[left] % 2;
			left++;
		}

		res += right - left + 1;
	}

	return res;
}
