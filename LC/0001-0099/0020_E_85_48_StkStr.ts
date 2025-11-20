// Striver 9.1.7,AlgoMap Stk 04.2

function isValid(s: string): boolean {
	let stack = [];

	for (let char of s) {
		if (char === '(' || char === '{' || char === '[') stack.push(char);
		else {
			if (ParMap.get(char) !== stack.pop()) return false;
		}
	}

	return stack.length === 0;
}
const ParMap = new Map([
	// ['(', '('],
	[')', '('],
	// ['{', '{'],
	['}', '{'],
	// ['[', '['],
	[']', '['],
]);

console.log(isValid('()'));
