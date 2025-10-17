function frequencySort(s: string): string {
	let map = new Map();

	for (let i = 0; i < s.length; i++) {
		map.set(s[i], (map.get(s[i]) || 0) + 1);
	}

	map = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));

	let newStr: string = '';
	for (const [key, val] of map) {
		for (let i = 0; i < val; i++) {
			newStr += key;
		}
	}

	return newStr;
}

// console.log(frequencySort('tree'));
// console.log(frequencySort('cccaaa'));
// console.log(frequencySort('Aabb'));

function maxDepth(s: string): number {
	let maxDepth: number = 0;
	let temp: number = 0;

	for (const char of s) {
		if (char === '(') temp++;
		if (char === ')') temp--;

		if (temp > maxDepth) maxDepth = temp;
	}

	return maxDepth;
}

// console.log(maxDepth('(1+(2*3)+((8)/4))+1'));
// console.log(maxDepth('(1)+((2))+(((3)))'));
// console.log(maxDepth('()(())((()()))'));

function romanToInt(s: string): number {
	let val: number = 0;

	for (let i = 0; i < s.length; i++) {
		if (i < s.length - 1 && romanMap.get(s[i]) < romanMap.get(s[i + 1])) {
			let tempVal: number = romanMap.get(s[i + 1]) - romanMap.get(s[i]);
			val += tempVal;
			i++;
		} else val += romanMap.get(s[i]);
	}

	return val;
}

const romanMap = new Map([
	['I', 1],
	['V', 5],
	['X', 10],
	['L', 50],
	['C', 100],
	['D', 500],
	['M', 1000],
]);

// console.log(romanToInt('III'));
// console.log(romanToInt('LVIII'));
// console.log(romanToInt('MCMXCIV'));
