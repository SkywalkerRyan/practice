// LC 202
// O(log n), O(log n)
function isHappy(n: number): boolean {
	let cur = n;
	let iter = true;

	let set: Set<number> = new Set();

	while (iter) {
		let sum = 0;

		while (cur > 0) {
			const last = cur % 10;
			sum += last * last;
			cur = Math.floor(cur / 10);
		}
		if (sum === 1) return true;
		if (set.has(sum)) return false;

		set.add(sum);

		cur = sum;
	}

	return false;
}
