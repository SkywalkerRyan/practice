// AlgoMap Slw 07.5

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
console.log(minSubArrayLen(11, [1, 2, 3, 4, 5])); // 3
