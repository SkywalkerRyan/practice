function numberOfSubstrings(s: string): number {
	let res = 0;
	let map = new Map([
		['a', -1],
		['b', -1],
		['c', -1],
	]);

	for (let i = 0; i < s.length; i++) {
		map.set(s[i], i);
		let min = Math.min(...map.values());

		if (min < 0) continue;
		res += min + 1;
	}

	return res;
}

console.log(numberOfSubstrings('abcabc'));
console.log(numberOfSubstrings('aaacb'));
console.log(numberOfSubstrings('abc'));
