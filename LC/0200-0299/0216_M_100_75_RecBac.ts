// Striver 7.2.11
function combinationSum3(k: number, n: number): number[][] {
	let res = [];

	backtrackComSum3([], 1, 0, res, n, k);

	return res;
}

function backtrackComSum3(
	cur: number[],
	curIdx: number,
	curSum: number,
	res: number[][],
	target: number,
	count: number
): void {
	if (curSum === target && cur.length === count) {
		res.push([...cur]);
		return;
	}
	if (curSum > target || curIdx > 9) return;

	backtrackComSum3(cur, curIdx + 1, curSum, res, target, count);
	cur.push(curIdx);
	backtrackComSum3(cur, curIdx + 1, curSum + curIdx, res, target, count);
	cur.pop();
}
console.log(combinationSum3(3, 7));
