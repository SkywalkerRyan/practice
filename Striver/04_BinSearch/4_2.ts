// 0069
function floorSqrt(x: number): number {
	if (x < 2) return x;

	let low = 1;
	let high = x;

	while (low <= high) {
		let mid = Math.floor((low + high) / 2);

		if (mid * mid === x) return mid;
		else if (mid * mid < x) {
			low = mid + 1;
		} else high = mid - 1;
	}

	return high;
}
// console.log(floorSqrt(8));

function nthRoot(n: number, m: number): number {
	if (m < 2) return m;

	let lo = 1;
	let hi = Math.floor(m / 2);

	while (lo <= hi) {
		let mid = Math.floor((lo + hi) / 2);

		let ans = 1;
		for (let i = 0; i < n; i++) {
			ans = ans * mid;
		}

		if (ans === m) return mid;
		else if (ans < m) lo = mid + 1;
		else hi = mid - 1;
	}

	return -1;
}
console.log(nthRoot(4, 69));
