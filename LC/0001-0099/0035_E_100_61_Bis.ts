// Striver 4.1.4
function searchInsert(nums: number[], target: number): number {
	let len = nums.length;
	let left = 0;
	let right = len - 1;
	let res = len;

	while (left <= right) {
		let mid = Math.floor((left + right) / 2);

		if (nums[mid] === target) return mid;
		else if (nums[mid] > target) {
			res = mid;
			right = mid - 1;
		} else {
			left = mid + 1;
		}
	}

	return res + 0;
}
// console.log(searchInsert([1, 3, 5, 6], 5));
// console.log(searchInsert([1, 3, 5, 6], 2));
// console.log(searchInsert([1, 3, 5, 6], 7));
// console.log(searchInsert([2, 3, 5, 6], 1));
console.log(searchInsert([2], 1));
