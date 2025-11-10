function sortedSquares(nums: number[]): number[] {
	let left = 0;
	let right = nums.length - 1;
	let squares = [];
	let idx = right;

	while (left <= right) {
		let sqLeft = nums[left] * nums[left];
		let sqRight = nums[right] * nums[right];
		if (sqLeft > sqRight) {
			squares[idx] = sqLeft;
			left++;
		} else {
			squares[idx] = sqRight;
			right--;
		}
		idx--;
	}

	return squares;
}
