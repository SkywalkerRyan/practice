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

console.log(majorityElement([7, 0, 0, 1, 7, 7, 2, 7, 7]));
console.log(majorityElement([1, 1, 1, 2, 1, 2]));
