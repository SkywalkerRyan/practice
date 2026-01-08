// 1011
function shipWithinDays(weights: number[], days: number): number {
	let res = 0;

	let low = Math.max(...weights);
	let high = weights.reduce((acc, num) => acc + num, 0);

	while (low <= high) {
		let mid = Math.floor((low + high) / 2);
		let ans = getDaysByCapacity(weights, mid);

		if (ans <= days) {
			res = mid;
			high = mid - 1;
		} else low = mid + 1;
	}

	return res;
}

function getDaysByCapacity(weights: number[], capacity: number): number {
	let daysNeeded = 1;
	let tempLoad = 0;

	for (const w of weights) {
		if (w > capacity) return Infinity;

		if (tempLoad + w > capacity) {
			daysNeeded++;
			tempLoad = w;
		} else tempLoad += w;
	}

	return daysNeeded;
}

console.log(shipWithinDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));
// console.log(shipWithinDays([3, 2, 2, 4, 1, 4], 3));
// console.log(shipWithinDays([1, 2, 3, 1, 1], 4));
