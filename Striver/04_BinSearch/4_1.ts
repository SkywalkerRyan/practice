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
console.log(upperBound([3, 5, 8, 9, 15, 19], 9));
