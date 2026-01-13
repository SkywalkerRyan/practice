// AlgoMap 6.4
function isPerfectSquare(num: number): boolean {
	let low = 1;
	let high = num;

	while (low <= high) {
		let mid = Math.floor((low + high) / 2);
		let square = mid * mid;

		if (square === num) return true;
		else if (square < num) low = mid + 1;
		else high = mid - 1;
	}

	return false;
}
console.log(isPerfectSquare(14));
