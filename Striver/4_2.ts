// function twoSum(nums: number[], target: number): number[] {
// 	for (let i = 0; i < nums.length; i++) {
// 		for (let j = i + 1; j < nums.length; j++) {
// 			if (nums[i] + nums[j] === target) {
// 				return [i, j];
// 			}
// 		}
// 	}
// 	return [-1, -1];
// }

// function twoSum(nums: number[], target: number): number[] {
// 	let map = new Map();
// 	for (let i = 0; i < nums.length; i++) {
// 		map.set(nums[i], i);
// 	}

// 	for (let i = 0; i < nums.length; i++) {
// 		const _target = target - nums[i];

// 		if (map.has(_target) && map.get(_target) !== i) return [i, map.get(_target)];
// 	}

// 	return [];
// }

function twoSum(nums: number[], target: number): number[] {
	let map = new Map();
	for (let i = 0; i < nums.length; i++) {
		const _target = target - nums[i];
		if (map.has(_target)) return [i, map.get(_target)];

		map.set(nums[i], i);
	}

	return [];
}

// console.log(twoSum([2, 6, 5, 8, 11], 14));
// console.log(twoSum([2, 6, 5, 8, 11], 15));
// console.log(twoSum([2, 7, 11, 15], 9));
// console.log(twoSum([3, 2, 4], 6));
// console.log(twoSum([3, 3], 6));

// @todo try using dutch national flag algo
function sortZeroOneTwo(nums: number[]): void {
	let map = new Map();

	for (let i = 0; i < nums.length; i++) {
		map.set(nums[i], (map.get(nums[i]) || 0) + 1);
	}

	let id = 0;
	for (let i = 0; i < 3; i++) {
		const count = map.get(i);
		for (let j = 0; j < count; j++) {
			nums[id] = i;
			id++;
		}
	}

	console.log(nums);
}

// sortZeroOneTwo([2, 0, 2, 1, 1, 0]);
// sortZeroOneTwo([2, 0, 1]);

function majorityElement2(nums: number[]): number {
	let map = new Map();

	for (let i = 0; i < nums.length; i++) {
		map.set(nums[i], (map.get(nums[i]) || 0) + 1);
	}

	for (const [key, val] of map) {
		if (val > nums.length / 2) return key;
	}

	return 0;
}

// console.log(majorityElement([7, 0, 0, 1, 7, 7, 2, 7, 7]));
// console.log(majorityElement([1, 1, 1, 2, 1, 2]));

// function maxSubArray2(nums: number[]): number {
// 	let highest: number = nums[0];
// 	let temp: number = nums[0];

// 	for (let i = 1; i < nums.length; i++) {
// 		if (temp < 1) temp = 0;
// 		temp = temp + nums[i];
// 		if (temp > highest) highest = temp;
// 	}

// 	return highest;
// }

function maxSubArray3(nums: number[]): number[] {
	let highest: number = nums[0];
	let temp: number = nums[0];

	let start: number = 0;
	let end: number = 1;

	for (let i = 1; i < nums.length; i++) {
		if (temp < 1) {
			temp = 0;
			start = i;
		}
		temp = temp + nums[i];
		if (temp > highest) {
			highest = temp;
			end = i;
		}
	}

	return [start, end];
}

// console.log(maxSubArray([-2, 1]));
// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

function maxProfit2(nums: number[]): number {
	let min: number = nums[0];
	let profit: number = 0;

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] < min) min = nums[i];

		profit = Math.max(profit, nums[i] - min);
	}

	return profit;
}

// console.log(maxProfit([7, 2, 7, 1, 5, 4]));
// console.log(maxProfit([7, 6, 4, 3, 1]));

function rearrangeArray2(nums: number[]): number[] {
	let pos: number[] = [];
	let neg: number[] = [];

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] > 0) pos.push(nums[i]);
		else neg.push(nums[i]);
	}

	let newArr: number[] = [];
	for (let i = 0; i < nums.length / 2; i++) {
		newArr.push(pos[i]);
		newArr.push(neg[i]);
	}

	return newArr;
}

// console.log(rearrangeArray([3, 1, -2, -5, 2, -4]));
// console.log(rearrangeArray([-1, 1]));

function nextPermutation(nums: number[]): number {
	return 0;
}

function leaders(nums: number[]): number[] {
	let _leaders: number[] = [];
	let highest: number = -1;

	for (let i = nums.length - 1; i >= 0; i--) {
		if (nums[i] > highest) {
			highest = nums[i];
			_leaders.unshift(highest);
		}
	}

	return _leaders;
}

// console.log(leaders([4, 7, 1, 0]));
// console.log(leaders([10, 22, 12, 3, 0, 6]));

function longestConsecutive(nums: number[]): number {
	if (nums.length < 1) return 0;
	nums = nums.sort((a, b) => a - b);
	nums = [...new Set(nums)];

	let highest: number = 0;
	let temp: number = 0;
	for (let i = 1; i < nums.length; i++) {
		if (nums[i] - nums[i - 1] === 1) temp++;
		else temp = 0;
		if (temp > highest) highest = temp;
	}

	return highest + 1;
}

// console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
// console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
// console.log(longestConsecutive([1, 0, 1, 2]));
// console.log(longestConsecutive([100, 200, 1, 3, 2, 4]));
// console.log(longestConsecutive([3, 8, 5, 7, 6]));

function setZeroes2(matrix: number[][]): void {
	let rows: Set<number> = new Set();
	let cols: Set<number> = new Set();

	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[0].length; j++) {
			if (matrix[i][j] === 0) {
				rows.add(j);
				cols.add(i);
			}
		}
	}

	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[0].length; j++) {
			if (rows.has(j) || cols.has(i)) {
				matrix[i][j] = 0;
			}
		}
	}

	console.log(matrix);
}

setZeroes([
	[1, 1, 1],
	[1, 0, 1],
	[1, 1, 1],
]);
setZeroes([
	[0, 1, 2, 0],
	[3, 4, 5, 2],
	[1, 3, 1, 5],
]);
