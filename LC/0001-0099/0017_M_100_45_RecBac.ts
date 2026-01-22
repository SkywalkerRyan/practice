// Striver 7.2.12
function letterCombinations(digits: string): string[] {
	if (digits === '') return [];

	let res: string[] = [];
	backtrackLetterCombo('', 0, digits, res);
	return res;
}

function backtrackLetterCombo(current: string, curIdx: number, digits: string, res: string[]): void {
	if (current.length === digits.length) {
		res.push(current);
		return;
	}

	const letters = digitToLetters[digits[curIdx]];
	for (const letter of letters) {
		backtrackLetterCombo(current + letter, curIdx + 1, digits, res);
	}
}

const digitToLetters: Record<string, string> = {
	'2': 'abc',
	'3': 'def',
	'4': 'ghi',
	'5': 'jkl',
	'6': 'mno',
	'7': 'pqrs',
	'8': 'tuv',
	'9': 'wxyz',
};

console.log(letterCombinations('23'));
