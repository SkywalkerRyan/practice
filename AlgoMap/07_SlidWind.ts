// function findMaxAverage(nums: number[], k: number): number {
// 	let res = 0;
// 	let len = nums.length;
// 	let left = 0;
// 	let right = k - 1;

// 	while (right < len) {
// 		let sum = 0;
// 		for (let i = left; i <= right; i++) {
// 			sum += nums[i];
// 		}
// 		if (res !== 0) res = Math.max(res, sum / k);
// 		else res = sum / k;
// 		left++;
// 		right++;
// 	}

// 	return res;
// }

// function findMaxAverage(nums: number[], k: number): number {
// 	let res = 0;
// 	let len = nums.length;
// 	let pSum = [0];

// 	for (let i = 0; i < len; i++) {
// 		let sum = pSum[i] + nums[i];
// 		pSum.push(sum);
// 	}

// 	let left = 0;
// 	let right = k;

// 	while (right <= len) {
// 		let _res = pSum[right] - pSum[left];

// 		if (res === 0) res = _res / k;
// 		else res = Math.max(res, _res / k);

// 		left++;
// 		right++;
// 	}

// 	return res;
// }

function findMaxAverage(nums: number[], k: number): number {
	let win = 0;

	for (let i = 0; i < k; i++) {
		win += nums[i];
	}

	let res = win;

	for (let i = k; i < nums.length; i++) {
		win += nums[i] - nums[i - k];
		res = Math.max(res, win);
	}

	return res / k;
}

// console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));
// console.log(findMaxAverage([5], 1));

// 0209
function minSubArrayLen(target: number, nums: number[]): number {
	let res = Infinity;
	let win = 0;

	let left = 0;
	for (let right = 0; right < nums.length; right++) {
		win += nums[right];

		while (win >= target) {
			res = Math.min(res, right - left + 1);
			win -= nums[left];
			left++;
		}
	}

	return res === Infinity ? 0 : res;
}

// console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])); // 2
// console.log(minSubArrayLen(4, [1, 4, 4]));
// console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]));
// console.log(minSubArrayLen(11, [1, 2, 3, 4, 5])); // 3

// 0567
// function checkInclusion(s1: string, s2: string): boolean {
// 	let map = new Map();

// 	for (let i = 0; i < s1.length; i++) {
// 		map.set(s1[i], (map.get(s1[i]) || 0) + 1);
// 	}

// 	let left = 0;

// 	for (let right = s1.length - 1; right < s2.length; right++) {
// 		let _map = new Map(map);

// 		for (let i = left; i <= right; i++) {
// 			let val = _map.get(s2[i]);
// 			if (val === 1) _map.delete(s2[i]);
// 			else _map.set(s2[i], val - 1);
// 		}

// 		if (_map.size === 0) return true;
// 		left++;
// 	}

// 	return false;
// }

// 0567
function checkInclusion(s1: string, s2: string): boolean {
	if (s1.length > s2.length) return false;

	let need = new Array(26).fill(0);
	let have = new Array(26).fill(0);

	for (const char of s1) need[char.charCodeAt(0) - 97]++;

	let left = 0;
	for (let right = 0; right < s2.length; right++) {
		have[s2.charCodeAt(right) - 97]++;

		if (right - left + 1 > s1.length) {
			have[s2.charCodeAt(left) - 97]--;
			left++;
		}

		if (isArrayEqual(need, have)) return true;
	}

	return false;
}

function isArrayEqual(a: number[], b: number[]): boolean {
	for (let i = 0; i < 26; i++) if (a[i] !== b[i]) return false;
	return true;
}

// console.log(checkInclusion('ab', 'eidbaooo'));
// console.log(checkInclusion('ab', 'eidboaooo'));
