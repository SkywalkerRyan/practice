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
