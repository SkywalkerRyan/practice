// LC 2549
// O(1), O(1)
function distinctIntegers(n: number): number {
	if (n === 1) return n;
	return n - 1;
}
