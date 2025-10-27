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

console.log(sortedSquares([-4, -1, 0, 3, 10]));

function reverseString(s: string[]): void {
	let left = 0;
	let right = s.length - 1;

	while (left < right) {
		let temp = s[left];
		s[left] = s[right];
		s[right] = temp;

		left++;
		right--;
	}
}
