// Striver 7.1.3
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

console.log(countGoodNumbers(50));
