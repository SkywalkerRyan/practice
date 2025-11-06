function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
	let map = new Map();
	let stack = [];

	for (let i = nums2.length - 1; i >= 0; i--) {
		while (stack.length && stack[stack.length - 1] < nums2[i]) {
			stack.pop();
		}

		if (stack.length === 0) map.set(nums2[i], -1);
		else map.set(nums2[i], stack[stack.length - 1]);

		stack.push(nums2[i]);
	}

	let res = [];

	for (let i = 0; i < nums1.length; i++) {
		res.push(map.get(nums1[i]));
	}
	return res;
}

// console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));

function nextGreaterElements(nums: number[]): number[] {
	let stk = [];
	let res = [];
	let len = nums.length;

	for (let i = len * 2 - 1; i >= 0; i--) {
		let idx = i % len;
		let num = nums[idx];
		while (stk.length && stk[stk.length - 1] <= num) {
			stk.pop();
		}

		if (!stk.length) res[idx] = -1;
		else res[idx] = stk[stk.length - 1];

		stk.push(num);
	}

	return res;
}

function nextSmallerElement(nums: number[]): number[] {
	let map = new Map();
	let stack = [];
	let res = [];

	for (let i = nums.length - 1; i >= 0; i--) {
		while (stack.length && stack[stack.length - 1] > nums[i]) {
			stack.pop();
		}

		if (stack.length === 0) res[i] = -1;
		else res[i] = stack[stack.length - 1];

		stack.push(nums[i]);
	}

	return res;
}

// console.log(nextSmallerElement([1, 3, 4, 2]));

function asteroidCollision(asteroids: number[]): number[] {
	if (asteroids.length < 2) return asteroids;

	let stk = [];

	for (let i = 0; i < asteroids.length; i++) {
		let element = asteroids[i];
		let last = stk[stk.length - 1];

		if (!stk.length || last < 0 || element > 0) stk.push(element);
		else if (-element === last) {
			stk.pop();
		} else if (-element > last) {
			stk.pop();
			i--;
		}
	}

	return stk;
}
// console.log(asteroidCollision([5, 10, -5]));
// console.log(asteroidCollision([8, -8]));
// console.log(asteroidCollision([10, 2, -5]));
// console.log(asteroidCollision([3, 5, -6, 2, -1, 4]));

function prevSmallerElement(arr: number[]): number[] {
	let pse = [];
	let stk = [];

	for (let i = 0; i < arr.length; i++) {
		while (stk[stk.length - 1] > arr[i]) {
			stk.pop();
		}

		if (stk.length === 0) pse.push(-1);
		else pse.push(stk[stk.length - 1]);

		stk.push(arr[i]);
	}

	return pse;
}
// console.log(prevSmallerElement([3, 1, 2, 4]));

function sumSubarrayMins(arr: number[]): number {
	let res = 0;

	let pseId = [];
	let nseId = [];

	let stk = [];
	const len = arr.length;

	for (let i = 0; i < len; i++) {
		while (stk.length && arr[stk[stk.length - 1]] >= arr[i]) {
			stk.pop();
		}
		if (stk.length === 0) pseId[i] = -1;
		else pseId[i] = stk[stk.length - 1];

		stk.push(i);
	}

	stk = [];
	for (let i = len - 1; i >= 0; i--) {
		while (stk.length && arr[stk[stk.length - 1]] > arr[i]) {
			stk.pop();
		}
		if (stk.length === 0) nseId[i] = len;
		else nseId[i] = stk[stk.length - 1];

		stk.push(i);
	}

	for (let i = 0; i < len; i++) {
		let next = Math.max(nseId[i] - i, 1);
		let prev = Math.max(i - pseId[i], 1);

		res += next * prev * arr[i];
	}

	return res % (10 ** 9 + 7);
}

// console.log(sumSubarrayMins([3, 1, 2, 4]));
// console.log(sumSubarrayMins([11, 81, 94, 43, 3]));
// console.log(sumSubarrayMins([71, 55, 82, 55]));

function subArrayRanges(nums: number[]): number {
	let res = 0;

	let pseId = [];
	let pgeId = [];
	let nseId = [];
	let ngeId = [];

	let stkG = [];
	let stkL = [];

	const len = nums.length;

	for (let i = 0; i < len; i++) {
		while (stkL.length && nums[stkL[stkL.length - 1]] >= nums[i]) {
			stkL.pop();
		}
		if (stkL.length === 0) pseId[i] = -1;
		else pseId[i] = stkL[stkL.length - 1];

		while (stkG.length && nums[stkG[stkG.length - 1]] < nums[i]) {
			stkG.pop();
		}
		if (stkG.length === 0) pgeId[i] = -1;
		else pgeId[i] = stkG[stkG.length - 1];

		stkL.push(i);
		stkG.push(i);
	}

	stkL = [];
	stkG = [];
	for (let i = len - 1; i >= 0; i--) {
		while (stkL.length && nums[stkL[stkL.length - 1]] > nums[i]) {
			stkL.pop();
		}
		if (stkL.length === 0) nseId[i] = len;
		else nseId[i] = stkL[stkL.length - 1];

		while (stkG.length && nums[stkG[stkG.length - 1]] <= nums[i]) {
			stkG.pop();
		}
		if (stkG.length === 0) ngeId[i] = len;
		else ngeId[i] = stkG[stkG.length - 1];

		stkL.push(i);
		stkG.push(i);
	}

	for (let i = 0; i < len; i++) {
		let nextS = nseId[i] - i;
		let prevS = i - pseId[i];
		let nextG = ngeId[i] - i;
		let prevG = i - pgeId[i];

		let small = nextS * prevS * nums[i];
		let great = nextG * prevG * nums[i];

		res += great - small;
	}

	return res;
}

function removeKdigits(num: string, k: number): string {
	if (num.length <= k) return '0';

	let stk = [];

	for (const char of num) {
		while (stk.length > 0 && k > 0 && stk[stk.length - 1] > char) {
			stk.pop();
			k--;
		}

		stk.push(char);
	}

	while (k > 0) {
		stk.pop();
		k--;
	}

	let res = stk.join('');
	res = res.replace(/^0+/, '');

	if (res.length === 0) return '0';

	return res;
}
// console.log(removeKdigits('1432219', 3));
// console.log(removeKdigits('10200', 1));

function largestRectangleArea(heights: number[]): number {
	let res = 0;

	let pse = [];
	let nse = [];
	let stk = [];
	const len = heights.length;
	for (let i = 0; i < len; i++) {
		while (stk.length && heights[stk[stk.length - 1]] >= heights[i]) {
			stk.pop();
		}

		if (stk.length === 0) pse[i] = -1;
		else pse[i] = stk[stk.length - 1];

		stk.push(i);
	}

	stk = [];
	for (let i = len - 1; i >= 0; i--) {
		while (stk.length && heights[stk[stk.length - 1]] > heights[i]) {
			stk.pop();
		}

		if (stk.length === 0) nse[i] = len;
		else nse[i] = stk[stk.length - 1];

		stk.push(i);
	}

	for (let i = 0; i < heights.length; i++) {
		let area = (nse[i] - pse[i] - 1) * heights[i];

		res = Math.max(res, area);
	}

	return res;
}
console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]));
// console.log(largestRectangleArea([2, 4]));
