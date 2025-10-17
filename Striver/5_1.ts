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

console.log(removeOuterParentheses('(()())(())'));
// console.log(removeOuterParentheses('(()())(())(()(()))'));
// console.log(removeOuterParentheses('()()'));
