function maxNumberOfBalloons(text: string): number {
	let map = new Map();

	for (const char of text) {
		map.set(char, (map.get(char) || 0) + 1);
	}

	let b = map.get('b') || 0;
	let a = map.get('a') || 0;
	let l = map.get('l') / 2 || 0;
	let o = map.get('o') / 2 || 0;
	let n = map.get('n') || 0;

	return Math.floor(Math.min(b, a, l, o, n));
}

console.log(maxNumberOfBalloons('nlaebolko'));
