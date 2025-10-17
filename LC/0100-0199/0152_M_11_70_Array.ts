function maxProduct1(nums: number[]): number {
	let highest: number = Math.max(...nums);
	let temp: number;

	for (let i = 0; i < nums.length; i++) {
		temp = nums[i];
		for (let j = i + 1; j < nums.length; j++) {
			temp = temp * nums[j];
			if (temp > highest) highest = temp;
		}
	}

	return highest;
}

console.log(maxProduct1([2, 3, -2, 4]));
console.log(maxProduct1([-2, 0, -1]));
console.log(maxProduct1([-2]));
console.log(maxProduct1([0, 2]));
