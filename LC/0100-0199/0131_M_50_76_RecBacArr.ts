// 0131
function partition(s: string): string[][] {
	let res = [];

	backtrackPartition([], 0, res, s);

	return res;
}

function backtrackPartition(cur: string[], curIdx: number, res: string[][], s: string): void {
	if (curIdx === s.length) {
		res.push([...cur]);
		return;
	}

	let len = s.length - 1;
	for (let i = curIdx; i <= len; i++) {
		if (checkPalindrome(s, curIdx, i)) {
			cur.push(s.slice(curIdx, i + 1));
			backtrackPartition(cur, i + 1, res, s);
			cur.pop();
		}
	}
}

function checkPalindrome(s: string, start: number, end: number): boolean {
	while (start <= end) {
		if (s[start] != s[end]) return false;

		start++;
		end--;
	}
	return true;
}
console.log(partition('abab'));
