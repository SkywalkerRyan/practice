function canConstruct(ransomNote: string, magazine: string): boolean {
	let map = new Map();

	for (let char of magazine) {
		map.set(char, (map.get(char) || 0) + 1);
	}

	for (let char of ransomNote) {
		if (map.get(char) > 0) map.set(char, map.get(char) - 1);
		else return false;
	}

	return true;
}
