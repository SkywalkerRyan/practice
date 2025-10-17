function longestCommonPrefix1(strs: string[]): string {
	let pref: string = '';
	strs = strs.sort();

	for (let i = 0; i < strs[0].length; i++) {
		if (strs[0][i] === strs[strs.length - 1][i]) pref += strs[0][i];
		else break;
	}

	return pref;
}

// console.log(longestCommonPrefix1(['flower', 'flow', 'flight']));
console.log(longestCommonPrefix1(['dog', 'racecar', 'car']));
