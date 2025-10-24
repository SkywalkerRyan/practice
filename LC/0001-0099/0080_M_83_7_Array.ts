function removeDuplicates(nums: number[]): number {
	let count = 0;

	let i = 0;
	let j = 0;

	let map = new Map();

	while (i <= nums.length - 1) {
		map.set(nums[i], (map.get(nums[i]) || 0) + 1);

		if (map.get(nums[i]) <= 2) {
			let temp = nums[j];
			nums[j] = nums[i];
			nums[i] = temp;

			j++;
			count++;
		}
		i++;
	}

	console.log(nums);

	return count;
}
