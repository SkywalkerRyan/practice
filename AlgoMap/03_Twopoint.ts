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

// console.log(sortedSquares([-4, -1, 0, 3, 10]));

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

function twoSum(numbers: number[], target: number): number[] {
	let left = 0;
	let right = numbers.length - 1;

	while (left < right) {
		if (numbers[left] + numbers[right] === target) return [left + 1, right + 1];
		else if (numbers[left] + numbers[right] > target) right--;
		else left++;
	}

	return [];
}

function isPalindrome(s: string): boolean {
	s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
	let result = true;

	let left = 0;
	let right = s.length - 1;

	while (left < right) {
		if (s[left] !== s[right]) return false;

		left++;
		right--;
	}

	return result;
}

// function maxArea(height: number[]): number {
// 	let num1 = 0;
// 	let num2 = 0;
// 	let vol = 0;

// 	for (let i = 1; i < height.length; i++) {
// 		if (height[i] > height[num1]) num1 = i;
// 		if (height[i] < height[num1] && height[i] > height[num2]) num2 = i;

// 		let temp = Math.max(height[num2], height[i]) * Math.abs(i - num1);
// 		vol = Math.max(vol, temp);
// 	}

// 	return vol;
// }

function maxArea(height: number[]): number {
	let left = 0;
	let right = height.length - 1;
	let result = 0;

	while (left < right) {
		let temp = Math.min(height[left], height[right]) * right - left;
		result = Math.max(result, temp);

		if (height[left] < height[right]) left++;
		else right--;
	}

	return result;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
// console.log(maxArea([1, 1]));

function threeSumClosest(nums: number[], target: number): number {
	nums = nums.sort((a, b) => a - b);
	let res = 0;

	for (let i = 0; i < nums.length; i++) {
		if (i > 0 && nums[i] === nums[i - 1]) continue;

		let j = i + 1;
		let k = nums.length - 1;
		while (j < k) {
			let sum = nums[i] + nums[j] + nums[k];
			let temp = Math.abs(target - sum);
			res = Math.min(res, temp);

			if (sum > 0) k--;
			else if (sum < 0) j++;
			else {
				while (j < k && nums[j] === nums[j + 1]) j++;
				while (j < k && nums[k] === nums[k - 1]) k--;

				j++;
				k--;
			}
		}
	}

	return res;
}
