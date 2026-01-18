// Striver 7.2.1
function GenBinStr(len: number): string[] {
	let res = [];

	backtrackBinStr('', res, len);

	return res;
}

function backtrackBinStr(current: string, res: string[], len: number): void {
	if (current.length === len) {
		res.push(current);
		return;
	}

	backtrackBinStr(current + '0', res, len);

	if (current === '' || current[current.length - 1] === '0') backtrackBinStr(current + '1', res, len);
}

// console.log(GenBinStr(5));

// 0022
function generateParenthesis(n: number): string[] {
	let res = [];

	backtrackParen('', res, 0, n);

	return res;
}

function backtrackParen(cur: string, res: string[], len: number, n: number): void {
	if (cur.length === n * 2) {
		res.push(cur);
		return;
	}

	if (len < n) backtrackParen(cur + '(', res, len + 1, n);

	if (cur.length !== len * 2) backtrackParen(cur + ')', res, len, n);
}
// console.log(generateParenthesis(3));

// 0078
// function subsets(nums: number[]): number[][] {
// 	let res = [];

// 	backtrackSubset(nums, [], res);

// 	return res;
// }

// function backtrackSubset(nums: number[], ids: number[], res: number[][]) {
// 	if (ids.length === nums.length) {
// 		let number = [];
// 		for (let i = 0; i < ids.length; i++) {
// 			if (ids[i] === 1) number.push(nums[i]);
// 		}

// 		res.push(number);
// 		return;
// 	}

// 	backtrackSubset(nums, [...ids, 0], res);
// 	backtrackSubset(nums, [...ids, 1], res);
// }
// console.log(subsets([1, 2, 3]));

// 0078
function subsets(nums: number[]): number[][] {
	let res = [];

	backtrackSubset(nums, res, 0, []);

	return res;
}

function backtrackSubset(nums: number[], res: number[][], ids: number, current: number[]): void {
	if (ids >= nums.length) {
		res.push(current);
		return;
	}

	backtrackSubset(nums, res, ids + 1, current);
	backtrackSubset(nums, res, ids + 1, [...current, nums[ids]]);
}
// console.log(subsets([3, 1, 2]));

// Striver 7.2.5
function countSubsequenceWithTargetSum(nums: number[], k: number): number {
	return backtrackCountTargetSum(0, 0, nums, k);
}

function backtrackCountTargetSum(current: number, curIdx: number, nums: number[], k: number): number {
	if (current === k) return 1;
	if (current > k || curIdx >= nums.length) return 0;

	return (
		backtrackCountTargetSum(current, curIdx + 1, nums, k) +
		backtrackCountTargetSum(current + nums[curIdx], curIdx + 1, nums, k)
	);
}
// console.log(countSubsequenceWithTargetSum([4, 9, 2, 5, 1], 10));
// console.log(countSubsequenceWithTargetSum([4, 2, 10, 5, 1, 3], 5));

// 0039
function combinationSum(candidates: number[], target: number): number[][] {
	let res = [];

	backtrackComSum([], 0, 0, res, candidates, target);

	return res;
}

function backtrackComSum(
	cur: number[],
	curSum: number,
	curIdx: number,
	res: number[][],
	nums: number[],
	target: number
): void {
	if (curSum === target) {
		res.push([...cur]);
		return;
	}
	if (curSum > target || curIdx >= nums.length) return;

	backtrackComSum(cur, curSum, curIdx + 1, res, nums, target);
	cur.push(nums[curIdx]);
	backtrackComSum(cur, curSum + nums[curIdx], curIdx, res, nums, target);
	cur.pop();
}
// console.log(combinationSum([2, 3, 6, 7], 7));

// 0040
function combinationSum2(candidates: number[], target: number): number[][] {
	let res = [];
	candidates = candidates.sort();

	backtrackComSum2([], 0, 0, candidates, res, target);

	return res;
}

function backtrackComSum2(
	cur: number[],
	curIdx: number,
	curSum: number,
	nums: number[],
	res: number[][],
	target: number
): void {
	if (curSum === target) {
		res.push([...cur]);
		return;
	}

	if (curSum > target || curIdx >= nums.length) return;

	for (let i = curIdx; i < nums.length; i++) {
		if (i > curIdx && nums[i] === nums[i - 1]) continue;

		cur.push(nums[i]);
		backtrackComSum2(cur, i + 1, curSum + nums[i], nums, res, target);
		cur.pop();
	}
}

// console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
