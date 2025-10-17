function isAnagram2(s: string, t: string): boolean {
	if (s.length !== t.length) return false;

	let map = new Map();

	for (let i = 0; i < s.length; i++) {
		map.set(s[i], (map.get(s[i]) || 0) + 1);
	}

	for (let i = 0; i < s.length; i++) {
		if (!map.has(t[i])) return false;
		else map.set(t[i], map.get(t[i]) - 1);
	}

	for (const [key, val] of map) {
		if (val !== 0) return false;
	}

	return true;
}

console.log(isAnagram2('anagram', 'nagaram'));
console.log(isAnagram2('rat', 'car'));
