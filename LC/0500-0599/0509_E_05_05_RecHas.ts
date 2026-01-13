// 0509
function fib(n: number, memo = {}) {
	if (n === 0 || n === 1) return n;
	if (memo[n]) return memo[n];

	memo[n] = fib(n - 1) + fib(n - 2);
	return memo[n];
}

console.log(fib(3));
