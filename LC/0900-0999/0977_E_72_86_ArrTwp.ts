function sortedSquares(nums: number[]): number[] {
	for (let i = 0; i < nums.length; i++) {
		nums[i] = nums[i] * nums[i];
	}

	let left = 0;
	let right = nums.length - 1;
	let squares = [];

	while (left <= right) {
		if (nums[left] > nums[right]) {
			squares.push(nums[left]);
			left++;
		} else {
			squares.push(nums[right]);
			right--;
		}
	}

	return squares.reverse();
}
