function longestConsecutive2(nums: number[]): number {
	if (nums.length < 1) return 0;
	nums = nums.sort((a, b) => a - b);
	nums = [...new Set(nums)];

	let highest: number = 0;
	let temp: number = 0;
	for (let i = 1; i < nums.length; i++) {
		if (nums[i] - nums[i - 1] === 1) temp++;
		else temp = 0;
		if (temp > highest) highest = temp;
	}

	return highest + 1;
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
console.log(longestConsecutive([1, 0, 1, 2]));
console.log(longestConsecutive([100, 200, 1, 3, 2, 4]));
console.log(longestConsecutive([3, 8, 5, 7, 6]));
