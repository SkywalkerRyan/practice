function findMaxConsecutiveOnes(nums: number[]): number {
	let highest: number = 0;
	let temp: number = 0;

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === 1) temp++;
		else temp = 0;

		if (temp > highest) highest = temp;
	}

	return highest;
}

console.log(findMaxConsecutiveOnes([1, 1, 0, 0, 1, 1, 1, 0]));
// console.log(findMaxConsecutiveOnes([0, 0, 0, 0, 0, 0, 0, 0]));
