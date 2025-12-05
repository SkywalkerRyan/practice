// Striver 4.1.12
function singleNonDuplicate(nums: number[]): number {
	let left = 0;
	let right = nums.length;
	let res = 0;

	while (left <= right) {
		let mid = Math.floor((left + right) / 2);
		res = mid;

		if (nums[mid] !== nums[mid - 1] && nums[mid] !== nums[mid + 1]) break;

		let other = mid % 2 === 0 ? mid + 1 : mid - 1;

		if (nums[mid] === nums[other]) {
			left = mid + 1;
		} else right = mid - 1;
	}

	return nums[res];
}

// console.log(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8]));
// console.log(singleNonDuplicate([3, 3, 7, 7, 10, 11, 11]));
console.log(singleNonDuplicate([1, 1, 2, 3, 3]));
