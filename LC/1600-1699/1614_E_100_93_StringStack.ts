function maxDepth1(s: string): number {
	let maxDepth: number = 0;
	let temp: number = 0;

	for (const char of s) {
		if (char === '(') temp++;
		if (char === ')') temp--;

		if (temp > maxDepth) maxDepth = temp;
	}

	return maxDepth;
}

console.log(maxDepth1('(1+(2*3)+((8)/4))+1'));
console.log(maxDepth1('(1)+((2))+(((3)))'));
console.log(maxDepth1('()(())((()()))'));
