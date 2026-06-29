// LC 1967
function numOfStrings(patterns: string[], word: string): number {
	let res = 0;

	for (let i = 0; i < patterns.length; i++) if (word.includes(patterns[i])) res++;

	return res;
}
