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

// console.log(maxNumberOfBalloons('nlaebolko'));

function isValidSudoku(board: string[][]): boolean {
	let rows = Array.from({ length: 9 }, () => new Set());
	let cols = Array.from({ length: 9 }, () => new Set());
	let boxes = Array.from({ length: 9 }, () => new Set());

	for (let i = 0; i < 9; i++) {
		for (let j = 0; j < 9; j++) {
			if (board[i][j] === '.') continue;

			let val = board[i][j];
			let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

			if (rows[i].has(val) || cols[j].has(val) || boxes[boxIndex].has(val)) {
				return false;
			}
			rows[i].add(val);
			cols[j].add(val);
			boxes[boxIndex].add(val);
		}
	}

	return true;
}

// console.log(
// 	isValidSudoku([
// 		['5', '3', '.', '.', '7', '.', '.', '.', '.'],
// 		['6', '.', '.', '1', '9', '5', '.', '.', '.'],
// 		['.', '9', '8', '.', '.', '.', '.', '6', '.'],
// 		['8', '.', '.', '.', '6', '.', '.', '.', '3'],
// 		['4', '.', '.', '8', '.', '3', '.', '.', '1'],
// 		['7', '.', '.', '.', '2', '.', '.', '.', '6'],
// 		['.', '6', '.', '.', '.', '.', '2', '8', '.'],
// 		['.', '.', '.', '4', '1', '9', '.', '.', '5'],
// 		['.', '.', '.', '.', '8', '.', '.', '7', '9'],
// 	])
// );
// console.log(
// 	isValidSudoku([
// 		['.', '.', '.', '.', '5', '.', '.', '1', '.'],
// 		['.', '4', '.', '3', '.', '.', '.', '.', '.'],
// 		['.', '.', '.', '.', '.', '3', '.', '.', '1'],
// 		['8', '.', '.', '.', '.', '.', '.', '2', '.'],
// 		['.', '.', '2', '.', '7', '.', '.', '.', '.'],
// 		['.', '1', '5', '.', '.', '.', '.', '.', '.'],
// 		['.', '.', '.', '.', '.', '2', '.', '.', '.'],
// 		['.', '2', '.', '9', '.', '.', '.', '.', '.'],
// 		['.', '.', '4', '.', '.', '.', '.', '.', '.'],
// 	])
// );

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
