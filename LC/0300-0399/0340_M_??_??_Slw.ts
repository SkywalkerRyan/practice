// Striver 10.2.1

function kDistinctChar(s: string, k: number) {
	let res = 0;

	let left = 0;
	let map = new Map();

	for (let right = 0; right < s.length; right++) {
		map.set(s[right], (map.get(s[right]) || 0) + 1);

		while (map.size > k) {
			let temp = map.get(s[left]);
			temp === 1 ? map.delete(s[left]) : map.set(s[left], temp - 1);
			left++;
		}

		res = Math.max(res, right - left + 1);
	}

	return res;
}

console.log(kDistinctChar('aababbcaacc', 2)); // 6
console.log(kDistinctChar('abcddefg', 3)); // 4
console.log(kDistinctChar('eceba', 2)); // 3
