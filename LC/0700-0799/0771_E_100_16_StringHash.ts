function numJewelsInStones(jewels: string, stones: string): number {
	let map = new Set();

	for (let char of jewels) {
		map.add(char);
	}

	let count = 0;
	for (let char of stones) {
		if (map.has(char)) count++;
	}

	return count;
}

console.log(numJewelsInStones('aA', 'aAAbbbb'));
