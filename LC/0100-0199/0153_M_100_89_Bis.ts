// Striver 4.1.10
function findMin(nums: number[]): number {
	let left = 0;
	let right = nums.length - 1;

	let res = Infinity;

	while (left <= right) {
		let mid = Math.floor((left + right) / 2);

		res = Math.min(res, nums[mid]);

		if (nums[mid] > nums[right]) {
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}

	return res;
}
// console.log(findMin([3, 4, 5, 1, 2]));
// console.log(findMin([4, 5, 6, 7, 0, 1, 2]));
console.log(findMin([11, 13, 15, 17]));
