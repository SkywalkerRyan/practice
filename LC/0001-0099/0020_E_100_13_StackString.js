// Striver 9.1.7, AlgoMap Stk 04.2

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
	let stack = [];

	for (let i = 0; i < s.length; i++) {
		let _opposite = opposite(s[i]);

		if (_opposite === 0) stack.push(s[i]);
		else {
			if (_opposite === stack[stack.length - 1]) stack.pop();
			else return false;
		}
	}

	if (stack.length === 0) return true;

	return false;
};

let opposite = (s) => {
	switch (s) {
		case ')':
			return '(';
		case '}':
			return '{';
		case ']':
			return '[';

		default:
			return 0;
	}
};

// const testVal = "()"
// const testVal = "()[]{}"
// const testVal = "(]"
// const testVal = "([])"
const testVal = '(';

console.log(isValid(testVal));
