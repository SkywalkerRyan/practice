function rotateString1(s: string, goal: string): boolean {
	for (let i = 0; i < s.length; i++) {
		goal = goal.substring(1) + goal.substring(0, 1);
		if (s === goal) return true;
	}

	return false;
}

console.log(rotateString1('abcde', 'cdeab'));
console.log(rotateString1('abcde', 'abced'));
console.log(rotateString1('defdefdefabcabc', 'defdefabcabcdef'));
