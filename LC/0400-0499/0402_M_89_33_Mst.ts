// Striver 9.3.9

function removeKdigits(num: string, k: number): string {
	if (num.length <= k) return '0';

	let stk = [];

	for (const char of num) {
		while (stk.length > 0 && k > 0 && stk[stk.length - 1] > char) {
			stk.pop();
			k--;
		}

		stk.push(char);
	}

	while (k > 0) {
		stk.pop();
		k--;
	}

	let res = stk.join('');
	res = res.replace(/^0+/, '');

	if (res.length === 0) return '0';

	return res;
}
// console.log(removeKdigits('1432219', 3));
console.log(removeKdigits('10200', 1));
