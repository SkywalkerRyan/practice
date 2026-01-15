// Striver 7.2.1
function GenBinStr(len: number): string[] {
	let res = [];

	backtrack('', res, len);

	return res;
}

function backtrack(current: string, res: string[], len: number): void {
	if (current.length === len) {
		res.push(current);
		return;
	}

	backtrack(current + '0', res, len);

	if (current === '' || current[current.length - 1] === '0') backtrack(current + '1', res, len);
}

console.log(GenBinStr(5));
