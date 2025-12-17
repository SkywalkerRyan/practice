// Striver 4.1.13
function findPeakElement(nums: number[]): number {
	let last = nums.length - 1;

	if (last === 0) return 0;
	if (nums[0] > nums[1]) return 0;
	if (nums[last] > nums[last - 1]) return last;

	let left = 0;
	let right = last;

	let mid = 0;

	while (left <= right) {
		mid = Math.floor((left + right) / 2);
		console.log('mid : ', mid);

		if (nums[mid - 1] < nums[mid] && nums[mid] > nums[mid + 1]) return mid;
		else if (nums[mid - 1] < nums[mid]) left = mid + 1;
		else right = mid;
	}

	return mid;
}
// console.log(findPeakElement([1, 2, 3, 1]));
// console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4]));
console.log(findPeakElement([1, 2, 1, 3, 2]));
