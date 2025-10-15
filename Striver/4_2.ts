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

console.log(twoSum([2, 6, 5, 8, 11], 14));
console.log(twoSum([2, 6, 5, 8, 11], 15));
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
