function secondLargest(arr: number[]): number[] {
	if (arr.length < 2) return [-1, -1];

	let small1: number = 10000;
	let small2: number = 10000;
	let big1: number = arr[0];
	let big2: number = arr[0];

	for (let index = 0; index < arr.length; index++) {
		if (arr[index] < small1) small1 = arr[index];

		if (arr[index] > small1 && arr[index] < small2) small2 = arr[index];

		if (arr[index] > big1) big1 = arr[index];

		if (arr[index] < big1 && arr[index] > big2) big2 = arr[index];
	}
	return [small2, big2];
}
// console.log(secondLargest([1,2,4,7,7,5]));
// console.log(secondLargest([1]));

function checkSorted(arr: number[]): boolean {
	let ret = true;

	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i] > arr[i + 1]) {
			ret = false;
		}
	}
	return ret;
}

// console.log(checkSorted([1,2,3,4,5]));
// console.log(checkSorted([5,4,6,7,8]));

function removeDuplicate(arr: number[]): number[] {
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] === arr[i - 1]) {
			arr.splice(i - 1, 1);
			i--;
		}
	}

	return arr;
}

// console.log(removeDuplicate([1,1,2,2,2,3,3]));
// console.log(removeDuplicate([1,1,1,2,2,3,3,3,3,4,4]));

function leftRotate(arr: number[]): number[] {
	let newArr: number[] = [];
	const len = arr.length;

	for (let i = 0; i < len; i++) {
		newArr.push(arr[(i + 1) % len]);
	}

	return newArr;
}

// console.log(leftRotate([1,2,3,4,5]));
// console.log(leftRotate([3]));

function moveZeros(nums: number[]): number[] {
	let i = 0;
	for (let j = 0; j < nums.length; j++) {
		if (nums[j] !== 0) {
			const temp = nums[i];
			nums[i] = nums[j];
			nums[j] = temp;

			i++;
		}
	}

	return nums;
}

// console.log(moveZeros([1, 0, 2, 3, 0, 4, 0, 1]))
// console.log(moveZeros([0, 1, 0, 3, 12]))
// console.log(moveZeros([1, 2, 0, 1, 0, 4, 0]))
function linearSearch(nums: number[], num: number): number {
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === num) {
			return i;
		}
	}

	return -1;
}

// console.log(linearSearch([2, 3, 4, 5, 3], 3))

function unionArray(nums1: number[], nums2: number[]): number[] {
	let newArr: Set<number> = new Set([...nums1, ...nums2]);

	return Array.from(newArr).sort((a, b) => a - b);
}

// console.log(unionArray([1, 2, 3, 4, 5], [2, 3, 4, 4, 5]));
// console.log(unionArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [2, 3, 4, 4, 5, 11, 12]));

function missingNumbers(nums: number[]) {
	let len: number = nums.length;
	let sum: number = (len * (len + 1)) / 2;

	for (let i = 0; i < nums.length; i++) {
		sum -= nums[i];
	}

	return sum;
}

// console.log(missingNumbers([0, 2, 3, 1, 4]));
// console.log(missingNumbers([0, 1, 2, 4, 5, 6]));

function findMaxConsecutiveOnes(nums: number[]): number {
	let highest: number = 0;
	let temp: number = 0;

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === 1) temp++;
		else temp = 0;

		if (temp > highest) highest = temp;
	}

	return highest;
}

// console.log(findMaxConsecutiveOnes([1, 1, 0, 0, 1, 1, 1, 0]));
// console.log(findMaxConsecutiveOnes([0, 0, 0, 0, 0, 0, 0, 0]));

// function singleNumber(nums: number[]): number {
// 	const numSet: Set<number> = new Set([...nums]);
// 	let sum: number = 0;

// 	for (const num of numSet) sum += num;

// 	sum = sum * 2;

// 	for (let i = 0; i < nums.length; i++) {
// 		sum = sum - nums[i];
// 	}

// 	return sum;
// }

function singleNumber(nums: number[]): number {
	const map = new Map();
	for (let i = 0; i < nums.length; i++) {
		const num = nums[i];
		map.set(num, (map.get(num) || 0) + 1);
	}

	for (const [key, val] of map) {
		if (val === 1) return key;
	}

	return 0;
}
// console.log(singleNumber([2, 2, 1]));
// console.log(singleNumber([4, 1, 2, 1, 2]));
// console.log(singleNumber([1]));

// @todo Try using two pointers again
function longestSubarray(nums: number[], k: number): number {
	let highest: number = 0;
	for (let i = 0; i < nums.length; i++) {
		let temp: number = nums[i];
		second: for (let j = i + 1; j < nums.length; j++) {
			temp += nums[j];
			if (temp === k) {
				highest = j - i + 1;
				break second;
			}
		}
	}
	return highest;
}

// console.log(longestSubarray([10, 5, 2, 7, 1, 9], 15));
// console.log(longestSubarray([-3, 2, 1], 6));
// console.log(longestSubarray([-1, 1, 1], 1));
