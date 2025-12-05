// Striver 4.1.12
function singleNonDuplicate(nums: number[]): number {
	let left = 0;
	let right = nums.length;

	while (left < right) {
		let mid = Math.floor((left + right) / 2);

		if (mid % 2 === 1) mid--;

		if (nums[mid] === nums[mid + 1]) {
			left = mid + 2;
		} else right = mid;
	}

	return nums[left];
}

// console.log(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8]));
// console.log(singleNonDuplicate([3, 3, 7, 7, 10, 11, 11]));
console.log(singleNonDuplicate([1, 1, 2, 3, 3]));
