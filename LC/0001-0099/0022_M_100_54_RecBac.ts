// Striver 7.2.2
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
console.log(generateParenthesis(3));
