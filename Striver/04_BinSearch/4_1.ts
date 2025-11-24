// 0704
function search(nums: number[], target: number): number {
	let left = 0;
	let right = nums.length - 1;

	while (left <= right) {
		let mid = Math.floor((left + right) / 2);

		if (nums[mid] === target) return mid;
		else if (target > nums[mid]) left = mid + 1;
		else right = mid - 1;
	}

	return -1;
}

// console.log(search([-1, 0, 3, 5, 9, 12], 9));

function lowerBound(nums: number[], target: number) {
	let left = 0;
	let len = nums.length;
	let right = len - 1;
	let res = len;

	while (left < right) {
		let mid = Math.floor((left + right) / 2);

		if (nums[mid] >= target) {
			res = mid;
			right = mid;
		} else left = mid + 1;
	}

	return res;
}

// console.log(lowerBound([1, 2, 2, 3], 2));
// console.log(lowerBound([3, 5, 8, 15, 19], 9));

function upperBound(nums: number[], target: number) {
	let left = 0;
	let len = nums.length;
	let right = len - 1;
	let res = len;

	while (left <= right) {
		let mid = Math.floor((left + right) / 2);

		if (nums[mid] > target) {
			res = mid;
			right = mid - 1;
		} else {
			left = mid + 1;
		}
	}

	return res;
}

// console.log(upperBound([1, 2, 2, 3], 2));
// console.log(upperBound([3, 5, 8, 9, 15, 19], 9));

// 0035
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
// console.log(searchInsert([2], 1));

function getFloorAndCeil(nums: number[], target: number): number[] {
	let len = nums.length;
	let left = 0;
	let right = len - 1;
	let res = len;

	while (left <= right) {
		let mid = Math.floor((left + right) / 2);

		if (nums[mid] === target) return [nums[mid], nums[mid]];
		else if (nums[mid] > target) {
			res = mid;
			right = mid - 1;
		} else {
			left = mid + 1;
		}
	}

	return [nums[res], nums[res + 1]];
}
// console.log(getFloorAndCeil([3, 4, 4, 7, 8, 10], 5));

// 0034
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
