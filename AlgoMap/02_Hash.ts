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

// console.log(numJewelsInStones('aA', 'aAAbbbb'));

function containsDuplicate1(nums: number[]): boolean {
	let map = new Map();

	for (let i = 0; i < nums.length; i++) {
		if (map.has(nums[i])) return true;

		map.set(nums[i], 1);
	}

	return false;
}

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
