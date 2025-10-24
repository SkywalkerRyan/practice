function convert(s: string, numRows: number): string {
	if (numRows === 1 || numRows >= s.length) return s;

	let map = new Map();
	let j = 1;
	let pos = false;

	for (let char of s) {
		map.set(j, (map.get(j) || '') + char);

		if (j === 1 || j === numRows) {
			pos = !pos;
		}

		if (pos) j++;
		else j--;
	}

	let res = '';
	for (let i = 1; i <= numRows; i++) {
		res += map.get(i);
	}
	return res;
}
console.log(convert('PAYPALISHIRING', 3));
