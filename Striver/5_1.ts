function removeOuterParentheses(s: string): string {
	let count: number = 0;
	let result: string = '';

	for (const char of s) {
		if (char === '(') count++;
		if (count > 1) result += char;
		if (char === ')') count--;
	}

	return result;
}

// console.log(removeOuterParentheses('(()())(())'));
// console.log(removeOuterParentheses('(()())(())(()(()))'));
// console.log(removeOuterParentheses('()()'));

// function reverseWords(s: string): string {
// 	const words = s.trim().split(' ');
// 	let res = '';

// 	for (let i = words.length - 1; i >= 0; i--) {
// 		console.log(words[i]);

// 		if (words[i] !== '') {
// 			res += words[i];

// 			if (i !== 0) res += ' ';
// 		}
// 	}

// 	return res;
// }

function reverseWords(s: string): string {
	const words = s.split(' ');
	let res = [];

	for (let i = words.length - 1; i >= 0; i--) {
		console.log(words[i]);

		if (words[i]) {
			res.push(words[i]);
		}
	}

	return res.join(' ');
}

// console.log(reverseWords('the sky is blue'));
// console.log(reverseWords('  hello world  '));
console.log(reverseWords('a good   example'));
