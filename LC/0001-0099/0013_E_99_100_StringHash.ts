function romanToInt1(s: string): number {
	let val: number = 0;

	for (let i = 0; i < s.length; i++) {
		if (i < s.length - 1 && romanMap1.get(s[i]) < romanMap1.get(s[i + 1])) {
			let tempVal: number = romanMap1.get(s[i + 1]) - romanMap1.get(s[i]);
			val += tempVal;
			i++;
		} else val += romanMap1.get(s[i]);
	}

	return val;
}

const romanMap1 = new Map([
	['I', 1],
	['V', 5],
	['X', 10],
	['L', 50],
	['C', 100],
	['D', 500],
	['M', 1000],
]);

console.log(romanToInt1('III'));
console.log(romanToInt1('LVIII'));
console.log(romanToInt1('MCMXCIV'));
