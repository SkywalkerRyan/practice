function frequencySort(s: string): string {
	let map = new Map();

	for (let i = 0; i < s.length; i++) {
		map.set(s[i], (map.get(s[i]) || 0) + 1);
	}

	map = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));

	let newStr: string = '';
	for (const [key, val] of map) {
		for (let i = 0; i < val; i++) {
			newStr += key;
		}
	}

	return newStr;
}

// console.log(frequencySort('tree'));
// console.log(frequencySort('cccaaa'));
// console.log(frequencySort('Aabb'));
