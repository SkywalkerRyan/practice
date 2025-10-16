function subarraySum(nums: number[], k: number): number {
	let count: number = 0;
	let temp: number = 0;

	for (let i = 0; i < nums.length; i++) {
		temp = nums[i];
		if (temp === k) {
			count++;
		}

		second: for (let j = i + 1; j < nums.length; j++) {
			temp += nums[j];
			if (temp === k) {
				count++;
			}
		}
	}

	return count;
}

console.log(subarraySum([0, 0], 0));
// console.log(subarraySum([1, 1, 1], 2));
// console.log(subarraySum([1, 2, 3], 3));
