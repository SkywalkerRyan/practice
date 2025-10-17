function fourSum(nums: number[], target: number): number[][] {
	let newArr: number[][] = [];
	nums = nums.sort((a, b) => a - b);
	let len = nums.length;

	for (let i = 0; i < len - 3; i++) {
		if (i > 0 && nums[i] === nums[i - 1]) continue;

		for (let j = i + 1; j < len - 2; j++) {
			if (j > i + 1 && nums[j] === nums[j - 1]) continue;

			let k = j + 1;
			let l = len - 1;
			while (k < l) {
				let sum = nums[i] + nums[j] + nums[k] + nums[l];

				if (sum > target) l--;
				else if (sum < target) k++;
				else {
					newArr.push([nums[i], nums[j], nums[k], nums[l]]);

					while (k < l && nums[k] === nums[k + 1]) k++;
					while (k < l && nums[l] === nums[l - 1]) l--;

					k++;
					l--;
				}
			}
		}
	}

	return newArr;
}

console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
console.log(fourSum([2, 2, 2, 2, 2], 8));
console.log(fourSum([0, 0, 0, 0], 0));
