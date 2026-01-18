// Striver 7.2.8
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

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
