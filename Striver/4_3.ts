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
	let newArr = [];
	nums = nums.sort((a, b) => a - b);

	for (let i = 0; i < nums.length; i++) {
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

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
