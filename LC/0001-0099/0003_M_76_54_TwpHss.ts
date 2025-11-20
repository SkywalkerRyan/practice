// Striver 10.1.1, AlgoMap Slw 07.3

function lengthOfLongestSubstring(s: string): number {
	let j = 0;
	let set = new Set();
	let val = 0;

	for (let i = 0; i < s.length; i++) {
		while (set.has(s[i])) {
			set.delete(s[j]);
			j++;
		}

		set.add(s[i]);
		val = Math.max(val, set.size);
	}

	return val;
}

console.log(lengthOfLongestSubstring('abcabcbb'));
