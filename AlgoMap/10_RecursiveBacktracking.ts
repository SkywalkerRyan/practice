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

function backtrackPermute(cur: number[], curIdx: number, res: number[][], nums: number[], len: number): void {
	if (cur.length === len) {
		res.push([...cur]);
		return;
	}

	for (let i = 0; i < nums.length; i++) {
		let temp = nums.splice(i, 1)[0];
		cur.push(temp);
		backtrackPermute(cur, curIdx, res, nums, len);
		cur.pop();
		nums.splice(i, 0, temp);
	}
}

// console.log(permute([1, 2, 3]));
