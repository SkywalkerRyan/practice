function lengthOfLongestSubstring(s: string): number {
	let j = 0;
	let set = new Set();
	let val = 0;

	for (let i = 0; i < s.length; i++) {
		while (set.has(s[i])) {
			set.delete(s[j]);
			j++;
		}

		set.add(s[i]);
		val = Math.max(val, set.size);
	}

	return val;
}

// console.log(lengthOfLongestSubstring('abcabcbb'));

function longestOnes(nums: number[], k: number): number {
	let left = 0;
	let right = 0;

	let zero = 0;
	let res = 0;

	while (right < nums.length) {
		nums[right] === 0 ? zero++ : null;

		while (zero > k) {
			nums[left] === 0 ? zero-- : null;
			left++;
		}
		right++;
		res = Math.max(res, right - left);
	}

	return res;
}

// console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2));
// console.log(longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3));

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

// console.log(numSubarraysWithSum([1, 0, 1, 0, 1], 1));

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
