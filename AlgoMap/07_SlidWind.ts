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
