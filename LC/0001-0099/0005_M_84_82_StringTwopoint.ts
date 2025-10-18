function longestPalindrome1(s: string): string {
	if (s.length === 0) return '';
	if (s.length === 1) return s;

	let res: string = '';
	let length: number = 0;
	let start: number = 0;
	let end: number = 0;

	for (let i = 1; i < s.length; i++) {
		let left: number = i - 1;
		let right: number = i + 1;
		let tempLength: number = 1;
		while (left >= 0 && right < s.length) {
			if (s[left] === s[right]) {
				tempLength += 2;
				if (tempLength > length) {
					length = tempLength;
					start = left;
					end = right;
				}
				left--;
				right++;
			} else break;
		}

		left = i - 1;
		right = i;
		tempLength = 0;
		while (left >= 0 && right < s.length) {
			if (s[left] === s[right]) {
				tempLength += 2;
				if (tempLength > length) {
					length = tempLength;
					start = left;
					end = right;
				}
				left--;
				right++;
			} else break;
		}
	}

	for (let i = start; i <= end; i++) {
		res += s[i];
	}

	return res;
}

// console.log(longestPalindrome1('babad'));
// console.log(longestPalindrome1('cbbd'));
console.log(longestPalindrome1('bb'));
