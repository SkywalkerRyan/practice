function reverseWords2(s: string): string {
	const words = s.split(' ');
	let res = [];

	for (let i = words.length - 1; i >= 0; i--) {
		if (words[i] !== '') {
			res.push(words[i]);
		}
	}

	return res.join(' ');
}

// console.log(reverseWords2('the sky is blue'));
// console.log(reverseWords2('  hello world  '));
console.log(reverseWords2('a good   example'));
