// Striver 4.1.9
function search(nums: number[], target: number): boolean {
	let left = 0;
	let right = nums.length - 1;

	while (left <= right) {
		let mid = Math.floor((left + right) / 2);

		if (nums[mid] === target) return true;

		if (nums[left] === nums[mid] && nums[mid] === nums[right]) {
			left++;
			right--;
			continue;
		}

		if (nums[mid] >= nums[left]) {
			if (nums[left] <= target && nums[mid] > target) {
				right = mid - 1;
			} else {
				left = mid + 1;
			}
		} else {
			if (nums[right] >= target && nums[mid] < target) {
				left = mid + 1;
			} else right = mid - 1;
		}
	}

	return false;
}
// console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
