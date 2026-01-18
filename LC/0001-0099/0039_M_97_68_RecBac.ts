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
