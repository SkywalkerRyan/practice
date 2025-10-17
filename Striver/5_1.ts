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
// console.log(reverseWords('a good   example'));

function largestOddNumber(num: string): string {
	for (let i = num.length - 1; i >= 0; i--) {
		if (parseInt(num[i]) % 2 === 0) num = num.slice(0, -1);
		else return num;
	}

	return '';
}
// console.log(largestOddNumber('52'));
// console.log(largestOddNumber('4206'));
// console.log(largestOddNumber('35427'));

function longestCommonPrefix(strs: string[]): string {
	let pref: string = '';
	strs = strs.sort();

	for (let i = 0; i < strs[0].length; i++) {
		if (strs[0][i] === strs[strs.length - 1][i]) pref += strs[0][i];
		else break;
	}

	return pref;
}

// console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
console.log(longestCommonPrefix(['dog', 'racecar', 'car']));
