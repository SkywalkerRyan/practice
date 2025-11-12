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

function totalFruit(fruits: number[]): number {
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

function numberOfSubstrings(s: string): number {
	let res = 0;
	let map = new Map([
		['a', -1],
		['b', -1],
		['c', -1],
	]);

	for (let i = 0; i < s.length; i++) {
		map.set(s[i], i);
		let min = Math.min(...map.values());

		if (min < 0) continue;
		res += min + 1;
	}

	return res;
}

// console.log(numberOfSubstrings('abcabc'));
// console.log(numberOfSubstrings('aaacb'));
// console.log(numberOfSubstrings('abc'));

function maxScore(cardPoints: number[], k: number): number {
	let lSum = 0;
	let rSum = 0;

	for (let i = 0; i < k; i++) {
		lSum += cardPoints[i];
	}

	let len = cardPoints.length;
	let res = lSum;

	for (let i = 1; i <= k; i++) {
		lSum -= cardPoints[k - i];
		rSum += cardPoints[len - i];
		res = Math.max(res, lSum + rSum);
	}

	return res;
}

// console.log(maxScore([1, 2, 3, 4, 5, 6, 1], 3));
// console.log(maxScore([2, 2, 2], 2));
// console.log(maxScore([9, 7, 7, 9, 7, 7, 9], 7));
// console.log(maxScore([100, 40, 17, 9, 73, 75], 3));
