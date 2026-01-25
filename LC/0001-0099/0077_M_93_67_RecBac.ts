// AlgoMap 10.3
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
console.log(combine(4, 2));
