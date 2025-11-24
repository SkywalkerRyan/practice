// Striver 4.1.6
function searchRange(nums: number[], target: number): number[] {
	let leftRes = searchOccurence(nums, target, true);
	let rightRes = searchOccurence(nums, target, false);

	return [leftRes, rightRes];
}

function searchOccurence(nums: number[], target: number, isSearchingLeft: boolean): number {
	let res = -1;
	let left = 0;
	let right = nums.length - 1;

	while (left <= right) {
		let mid = Math.floor((left + right) / 2);

		if (nums[mid] > target) right = mid - 1;
		else if (nums[mid] < target) left = mid + 1;
		else {
			res = mid;
			if (isSearchingLeft) right = mid - 1;
			else left = mid + 1;
		}
	}

	return res;
}
// console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
console.log(searchRange([5, 7, 7, 8, 8, 10], 10));
