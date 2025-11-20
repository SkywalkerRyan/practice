// AlgoMap Slw 07.6

function checkInclusion(s1: string, s2: string): boolean {
	if (s1.length > s2.length) return false;

	let need = new Array(26).fill(0);
	let have = new Array(26).fill(0);

	for (const char of s1) need[char.charCodeAt(0) - 97]++;

	let left = 0;
	for (let right = 0; right < s2.length; right++) {
		have[s2.charCodeAt(right) - 97]++;

		if (right - left + 1 > s1.length) {
			have[s2.charCodeAt(left) - 97]--;
			left++;
		}

		if (isArrayEqual(need, have)) return true;
	}

	return false;
}

function isArrayEqual(a: number[], b: number[]): boolean {
	for (let i = 0; i < 26; i++) if (a[i] !== b[i]) return false;
	return true;
}

console.log(checkInclusion('ab', 'eidbaooo'));
console.log(checkInclusion('ab', 'eidboaooo'));
