function generatePascal(num: number): number[][] {
	let newMatrix: number[][] = [];

	for (let i = 0; i <= num - 1; i++) {
		let newArr: number[] = [];

		for (let j = 0; j <= i; j++) {
			let temp: number = 1;

			if (j !== 0 && j !== i) {
				temp = newMatrix[i - 1][j - 1] + newMatrix[i - 1][j];
			}
			newArr.push(temp);
		}
		newMatrix.push(newArr);
	}

	return newMatrix;
}

// console.log(generatePascal(5));
// console.log(generatePascal(1));

function majorityElement(nums: number[]): number[] {
	let map = new Map();
	let set: Set<number> = new Set();

	const len: number = nums.length / 3;

	for (let i = 0; i < nums.length; i++) {
		map.set(nums[i], (map.get(nums[i]) || 0) + 1);
		if (map.get(nums[i]) > len) set.add(nums[i]);
	}

	return Array.from(set);
}

// Time limit exceeded
// function threeSum(nums: number[]): number[][] {
// 	let set = [];

// 	for (let i = 0; i < nums.length; i++) {
// 		for (let j = i + 1; j < nums.length; j++) {
// 			for (let k = j + 1; k < nums.length; k++) {
// 				if (nums[i] + nums[j] + nums[k] === 0) {
// 					let temp = [nums[i], nums[j], nums[k]];
// 					temp.sort((a, b) => a - b);
// 					set.push(temp);
// 				}
// 			}
// 		}
// 	}

// 	console.log('before : ', set);

// 	set = [...new Set(set.map((arr) => JSON.stringify(arr)))].map((str) => JSON.parse(str));
// 	console.log('after : ', set);

// 	return Array.from(set);
// }

// Time limit exceeded
// function threeSum(nums: number[]): number[][] {
// 	let newArr = [];

// 	for (let i = 0; i < nums.length; i++) {
// 		let map = new Map();

// 		for (let j = i + 1; j < nums.length; j++) {
// 			const _target = 0 - (nums[i] + nums[j]);

// 			if (map.has(_target)) {
// 				let temp = [nums[i], nums[j], _target];
// 				temp.sort((a, b) => a - b);
// 				newArr.push(temp);
// 			}
// 			map.set(nums[j], j);
// 		}
// 	}

// 	// let set = new Set(newArr.map((arr) => JSON.stringify(arr)));
// 	// newArr = Array.from(set).map((str) => JSON.parse(str));
// 	// return newArr;

// 	newArr = [...new Set(newArr.map((arr) => JSON.stringify(arr)))].map((str) => JSON.parse(str));

// 	return Array.from(newArr);
// }

function threeSum(nums: number[]): number[][] {
	let newArr: number[][] = [];
	nums = nums.sort((a, b) => a - b);

	for (let i = 0; i < nums.length - 2; i++) {
		if (i > 0 && nums[i] === nums[i - 1]) continue;

		let j = i + 1;
		let k = nums.length - 1;
		while (j < k) {
			let sum = nums[i] + nums[j] + nums[k];
			if (sum > 0) k--;
			else if (sum < 0) j++;
			else {
				newArr.push([nums[i], nums[j], nums[k]]);

				while (nums[j] === nums[j + 1]) j++;
				while (nums[k] === nums[k - 1]) k--;

				j++;
				k--;
			}
		}
	}

	return newArr;
}

// console.log(threeSum([-1, 0, 1, 2, -1, -4]));

function fourSum(nums: number[], target: number): number[][] {
	let newArr: number[][] = [];
	nums = nums.sort((a, b) => a - b);
	let len = nums.length;

	for (let i = 0; i < len - 3; i++) {
		if (i > 0 && nums[i] === nums[i - 1]) continue;

		for (let j = i + 1; j < len - 2; j++) {
			if (j > i + 1 && nums[j] === nums[j - 1]) continue;

			let k = j + 1;
			let l = len - 1;
			while (k < l) {
				let sum = nums[i] + nums[j] + nums[k] + nums[l];

				if (sum > target) l--;
				else if (sum < target) k++;
				else {
					newArr.push([nums[i], nums[j], nums[k], nums[l]]);

					while (k < l && nums[k] === nums[k + 1]) k++;
					while (k < l && nums[l] === nums[l - 1]) l--;

					k++;
					l--;
				}
			}
		}
	}

	return newArr;
}

// console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
// console.log(fourSum([2, 2, 2, 2, 2], 8));
// console.log(fourSum([0, 0, 0, 0], 0));

// function longestSubarray(nums: number[]): number {
// 	let highest: number = 0;
// 	let tempCnt: number = 0;

// 	for (let i = 0; i < nums.length; i++) {
// 		let temp: number = 0;
// 		for (let j = i; j < nums.length; j++) {
// 			temp = temp + nums[j];
// 			if (temp === 0) tempCnt = j - i + 1;
// 		}
// 		if (tempCnt > highest) highest = tempCnt;
// 	}

// 	return highest;
// }

// With prefix sum
function longestSubarray(nums: number[]): number {
	// @todo
	return 0;
}

// console.log(longestSubarray([9, -3, 3, -1, 6, -5]));
// console.log(longestSubarray([6, -2, 2, -8, 1, 7, 4, -10]));
// console.log(longestSubarray([1, 0, -5]));
// console.log(longestSubarray([1, 3, -5, 6, -2]));

// @todo
function subarraysWithXorK(nums: number) {
	//
}

// function merge(intervals: number[][]): number[][] {
// 	let len = intervals.length;
// 	let newArr: number[][] = [];

// 	intervals.sort((a, b) => a[0] - b[0]);

// 	for (let i = 1; i < len; i++) {
// 		if (intervals[i - 1][1] >= intervals[i][0]) {
// 			let temp = [];
// 			temp.push(intervals[i - 1][0]);
// 			temp.push(intervals[i][1]);
// 			newArr.push(temp);
// 		} else newArr.push(intervals[i]);
// 	}

// 	return newArr;
// }

// function merge(intervals: number[][]): number[][] {
// 	let len = intervals.length;
// 	intervals.sort((a, b) => a[0] - b[0]);

// 	let i = 1;
// 	while (i < len) {
// 		while (i < len && intervals[i - 1][1] >= intervals[i][0]) {
// 			intervals[i - 1][1] = Math.max(intervals[i - 1][1], intervals[i][1]);
// 			intervals.splice(i, 1);
// 			len--;
// 		}
// 		i++;
// 	}

// 	return intervals;
// }

function mergeIntervals(intervals: number[][]): number[][] {
	intervals.sort((a, b) => a[0] - b[0]);
	let newArr = [];

	for (let i = 0; i < intervals.length; i++) {
		const last = newArr.length - 1;

		if (i == 0 || intervals[i][0] > newArr[last][1]) newArr.push(intervals[i]);
		else {
			newArr[last][1] = Math.max(newArr[last][1], intervals[i][1]);
		}
	}

	return newArr;
}

// console.log(
// 	merge([
// 		[1, 3],
// 		[2, 6],
// 		[8, 10],
// 		[15, 18],
// 	])
// );
// console.log(
// 	merge([
// 		[1, 4],
// 		[4, 5],
// 	])
// );
// console.log(
// 	merge([
// 		[4, 7],
// 		[1, 4],
// 	])
// );
// console.log(merge([[1, 3]]));
// console.log(
// 	merge([
// 		[1, 4],
// 		[0, 2],
// 		[3, 5],
// 	])
// );

function mergeSortedArray(nums1: number[], m: number, nums2: number[], n: number): void {
	for (let i = m; i < nums1.length; i++) {
		nums1[i] = nums2[i - m];
	}
	nums1.sort((a, b) => a - b);
	console.log(nums1);
}

let nums1 = [1, 2, 3, 0, 0, 0],
	m = 3,
	nums2 = [2, 5, 6],
	n = 3;
// let nums1 = [1],
// 	m = 1,
// 	nums2 = [],
// 	n = 0;
// mergeSortedArray(nums1, m, nums2, n);

function findMissingRepeatingNumbers(nums: number[]): number[] {
	let map = new Map();
	let len: number = nums.length;
	let double: number;
	let sum: number = 0;
	let _sum: number = 0;

	for (let i = 0; i < nums.length; i++) {
		sum += nums[i];
		map.set(nums[i], (map.get(nums[i]) || 0) + 1);
		if (map.get(nums[i]) > 1) {
			double = nums[i];
			break;
		}
	}

	_sum = len * ((len + 1) / 2);
	let missing: number = _sum - sum + double;

	return [double, missing];
}

// console.log(findMissingRepeatingNumbers([3, 5, 4, 1, 1]));
// console.log(findMissingRepeatingNumbers([1, 2, 3, 6, 7, 5, 7]));

// function maxProduct(nums: number[]): number {
// 	let highest: number = nums[0];
// 	let temp: number;

// 	for (let i = 0; i < nums.length; i++) {
// 		temp = nums[i];
// 		for (let j = i + 1; j < nums.length; j++) {
// 			temp = temp * nums[j];
// 			if (temp > highest) highest = temp;
// 		}
// 	}

// 	return highest;
// }

function maxProduct(nums: number[]): number {
	let highest: number = nums[0];
	let curMax: number = 1;
	let curMin: number = 1;

	for (let i = 0; i < nums.length; i++) {
		let tempMax = curMax * nums[i];
		let tempMin = curMin * nums[i];

		curMax = Math.max(tempMax, tempMin, nums[i]);
		curMin = Math.min(tempMax, tempMin, nums[i]);

		highest = Math.max(highest, curMax);
	}

	return highest;
}

// console.log(maxProduct([2, 3, -2, 4]));
// console.log(maxProduct([-2, 0, -1]));
