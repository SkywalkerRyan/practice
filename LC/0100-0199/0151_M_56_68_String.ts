function reverseWords1(s: string): string {
	const words = s.trim().split(' ');
	let res = '';

	for (let i = words.length - 1; i >= 0; i--) {
		console.log(words[i]);

		if (words[i] !== '') {
			res += words[i];

			if (i !== 0) res += ' ';
		}
	}

	return res;
}

// console.log(reverseWords1('the sky is blue'));
// console.log(reverseWords1('  hello world  '));
console.log(reverseWords1('a good   example'));
