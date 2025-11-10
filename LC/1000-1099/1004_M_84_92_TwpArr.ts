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

function totalFruits(fruits: number[]) {
	let left = 0;
	let right = 0;

	let map = new Map();
	let res = 0;

	while (right < fruits.length) {
		map.set(fruits[right], (map.get(fruits[right]) || 0) + 1);

		while (map.size > 2) {
			let temp = map.get(fruits[left]);
			temp === 1 ? map.delete(fruits[left]) : map.set(fruits[left], temp - 1);
			left++;
		}
		right++;
		res = Math.max(res, right - left);
	}

	return res;
}

function characterReplacement(s: string, k: number): number {
	let left = 0;

	let map = new Map();
	let res = 0;
	let max = 0;

	for (let right = 0; right < s.length; right++) {
		map.set(s[right], (map.get(s[right]) || 0) + 1);
		max = Math.max(max, map.get(s[right]));

		while (right - left + 1 - max > k) {
			map.set(s[left], map.get(s[left]) - 1);
			left++;
		}
		res = Math.max(res, right - left + 1);
	}

	return res;
}
