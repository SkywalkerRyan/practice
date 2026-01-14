function myAtoi(s: string): number {
	let res = 0;

	return res;
}

// 0050
function myPow(x: number, n: number): number {
	if (n === 0) return 1;
	if (n === 1) return x;

	if (n < 0) return 1 / myPow(x, -n);

	if (n % 2 === 0) {
		let half = myPow(x, n / 2);
		return half * half;
	} else return x * myPow(x, n - 1);
}
// console.log(myPow(2, 10));
// console.log(myPow(2.1, 3));
// console.log(myPow(2, -2));
