function groupAnagrams(strs: string[]): string[][] {
	let map = new Map();

	for (let i = 0; i < strs.length; i++) {
		let key = strs[i].split('').sort().join('');
		if (!map.has(key)) map.set(key, []);
		map.get(key).push(i);
	}

	const values = [...map.values()];
	const result = values.map((ind) => ind.map((i) => strs[i]));

	return result;
}

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
