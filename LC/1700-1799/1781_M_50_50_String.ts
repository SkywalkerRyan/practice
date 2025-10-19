function beautySum1(s: string): number {
	let sum = 0;

	for (let i = 0; i < s.length; i++) {
		let map = new Map();

		for (let j = i; j < s.length; j++) {
			let temp = s[j];

			map.set(temp, (map.get(temp) || 0) + 1);
			const values = [...map.values()];
			const max = Math.max(...values);
			const min = Math.min(...values);

			sum += max - min;
		}
	}

	return sum;
}

console.log(beautySum1('aabcb'));
console.log(beautySum1('aabcbaa'));
