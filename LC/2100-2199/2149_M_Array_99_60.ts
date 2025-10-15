function rearrangeArray(nums: number[]): number[] {
	let pos: number[] = [];
	let neg: number[] = [];

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] > 0) pos.push(nums[i]);
		else neg.push(nums[i]);
	}

	let newArr: number[] = [];
	for (let i = 0; i < nums.length / 2; i++) {
		newArr.push(pos[i]);
		newArr.push(neg[i]);
	}

	return newArr;
}

console.log(rearrangeArray([3, 1, -2, -5, 2, -4]));
console.log(rearrangeArray([-1, 1]));
