function kDistinctChar(s: string, k: number) {
	let res = 0;

	let left = 0;
	let map = new Map();

	for (let right = 0; right < s.length; right++) {
		map.set(s[right], (map.get(s[right]) || 0) + 1);

		while (map.size > k) {
			let temp = map.get(s[left]);
			temp === 1 ? map.delete(s[left]) : map.set(s[left], temp - 1);
			left++;
		}

		res = Math.max(res, right - left + 1);
	}

	return res;
}

// console.log(kDistinctChar('aababbcaacc', 2)); // 6
// console.log(kDistinctChar('abcddefg', 3)); // 4
// console.log(kDistinctChar('eceba', 2)); // 3

function subarraysWithKDistinct(nums: number[], k: number): number {
	return atMost(nums, k) - atMost(nums, k - 1);
}

function atMost(nums: number[], k: number): number {
	let res = 0;

	let left = 0;
	let map = new Map();

	for (let right = 0; right < nums.length; right++) {
		map.set(nums[right], (map.get(nums[right]) || 0) + 1);

		while (map.size > k) {
			let temp = map.get(nums[left]);
			if (temp === 1) map.delete(nums[left]);
			else map.set(nums[left], temp - 1);
			left++;
		}

		res += right - left + 1;
	}

	return res;
}
