function singleNumber(nums: number[]): number {
	const numSet: Set<number> = new Set([...nums]);
	let sum: number = 0;

	for (const num of numSet) sum += num;

	sum = sum * 2;

	for (let i = 0; i < nums.length; i++) {
		sum = sum - nums[i];
	}

	return sum;
}

// console.log(singleNumber([2, 2, 1]));
// console.log(singleNumber([4, 1, 2, 1, 2]));
console.log(singleNumber([1]));
