// 0078
function subsets(nums: number[]): number[][] {
	let res = [];

	backtrackSubsets([], 0, res, nums);

	return res;
}

function backtrackSubsets(cur: number[], curIdx: number, res: number[][], nums: number[]): void {
	if (curIdx >= nums.length) {
		res.push([...cur]);
		return;
	}

	cur.push(nums[curIdx]);
	backtrackSubsets(cur, curIdx + 1, res, nums);
	cur.pop();
	backtrackSubsets(cur, curIdx + 1, res, nums);
}
// console.log(subsets([1, 2, 3]));

// 0046
function permute(nums: number[]): number[][] {
	let res = [];
	let len = nums.length;

	backtrackPermute([], 0, res, nums, len);

	return res;
}

function backtrackPermute(cur: number[], res: number[][], nums: number[], len: number): void {
	if (cur.length === len) {
		res.push([...cur]);
		return;
	}

	for (let i = 0; i < nums.length; i++) {
		let temp = nums.splice(i, 1)[0];
		cur.push(temp);
		backtrackPermute(cur, res, nums, len);
		cur.pop();
		nums.splice(i, 0, temp);
	}
}

// console.log(permute([1, 2, 3]));

// 0077
function combine(n: number, k: number): number[][] {
	let res = [];

	backtrackCombine([], 1, res, n, k);

	return res;
}

function backtrackCombine(cur: number[], startIdx: number, res: number[][], n: number, k: number): void {
	if (cur.length === k) {
		res.push([...cur]);
		return;
	}

	for (let i = startIdx; i <= n; i++) {
		cur.push(i);
		backtrackCombine(cur, i + 1, res, n, k);
		cur.pop();
	}
}
// console.log(combine(4, 2));
