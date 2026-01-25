// Striver 7.2.2, AlgoMap 10.6
function generateParenthesis(n: number): string[] {
	let res = [];

	backtrackGenParen('', 0, 0, res, n);

	return res;
}

function backtrackGenParen(cur: string, curIdx: number, closeCnt: number, res: string[], n: number): void {
	if (cur.length === 2 * n) {
		res.push(cur);
		return;
	}

	if (curIdx < n) backtrackGenParen(cur + '(', curIdx + 1, closeCnt, res, n);

	if (closeCnt < curIdx) backtrackGenParen(cur + ')', curIdx, closeCnt + 1, res, n);
}
// console.log(generateParenthesis(3));
