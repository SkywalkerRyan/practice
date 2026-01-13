// Striver 4.2.2, AlgoMap 6.8
function minEatingSpeed(piles: number[], h: number): number {
	if (piles.length === 1) return Math.ceil(piles[0] / h);

	let low = 1;
	let high = Math.max(...piles);
	let res = high;

	while (low <= high) {
		let mid = Math.floor((low + high) / 2);

		let time = getTimeForSpeed(piles, mid);

		if (time <= h) {
			res = mid;
			high = mid - 1;
		} else low = mid + 1;
	}

	return res;
}

function getTimeForSpeed(piles: number[], speed: number): number {
	let time = 0;

	for (let i = 0; i < piles.length; i++) {
		time += Math.ceil(piles[i] / speed);
	}

	return time;
}

// console.log(minEatingSpeed([3, 6, 7, 11], 8));
console.log(minEatingSpeed([30, 11, 23, 4, 20], 5));
