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

// 1922
function countGoodNumbers(n: number): number {
	const MOD = 1000000007n;

	let evenCnt = Math.ceil(n / 2);
	let oddCnt = Math.floor(n / 2);

	let evenPow = countPowBigInt(5n, BigInt(evenCnt), MOD);
	let oddPow = countPowBigInt(4n, BigInt(oddCnt), MOD);

	return Number((evenPow * oddPow) % MOD);
}

function countPowBigInt(pow: bigint, num: bigint, MOD: bigint): bigint {
	if (num === 0n) return 1n;
	if (num === 1n) return pow % MOD;

	if (num % 2n === 0n) {
		let half = countPowBigInt(pow, num / 2n, MOD);
		return (half * half) % MOD;
	} else return (pow * countPowBigInt(pow, num - 1n, MOD)) % MOD;
}

// console.log(countGoodNumbers(50));

// Striver 7.1.4
function sortStack(stk: number[]): number[] {
	if (stk.length <= 1) return stk;

	let temp = stk.pop();

	sortStack(stk);
	insertSorted(stk, temp);

	return stk;
}

function insertSorted(stk: number[], element: number): void {
	if (stk.length === 0 || stk[stk.length - 1] > element) {
		stk.push(element);
		return;
	}

	let temp = stk.pop();
	insertSorted(stk, element);
	stk.push(temp);
}
// console.log(sortStack([4, 1, 3, 2]));

function reverseStack(stk: number[]): number[] {
	if (stk.length <= 1) return stk;

	let temp = stk.pop();
	reverseStack(stk);
	insertAtBot(stk, temp);

	return stk;
}

function insertAtBot(stk: number[], element: number): void {
	if (stk.length === 0) {
		stk.push(element);
		return;
	}

	let temp = stk.pop();
	insertAtBot(stk, element);
	stk.push(temp);
}
// console.log(reverseStack([4, 1, 3, 2]));
