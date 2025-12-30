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
// console.log(nthRoot(4, 69));

// 0875
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
// console.log(minEatingSpeed([30, 11, 23, 4, 20], 5));

// 1482
function minDays(bloomDay: number[], m: number, k: number): number {
	let res = -1;

	let low = Math.min(...bloomDay);
	let high = Math.max(...bloomDay);

	while (low <= high) {
		let mid = Math.floor((low + high) / 2);

		let count = getTotalByDay(bloomDay, mid, k);

		if (count >= m) {
			high = mid - 1;
			res = mid;
		} else low = mid + 1;
	}

	return res;
}

function getTotalByDay(bloomDay: number[], day: number, k: number): number {
	let cnt = 0;
	let len = bloomDay.length;
	let temp = 0;

	for (let i = 0; i < len; i++) {
		if (bloomDay[i] <= day) temp++;
		else temp = 0;

		if (temp === k) {
			cnt++;
			temp = 0;
		}
	}

	return cnt;
}
// console.log(minDays([1, 10, 3, 10, 2], 3, 1));
// console.log(minDays([1, 10, 3, 10, 2], 3, 2));

// 1283
function smallestDivisor(nums: number[], threshold: number): number {
	let res = 0;

	let low = 1;
	let high = Math.max(...nums);

	while (low <= high) {
		let mid = Math.floor((low + high) / 2);
		console.log('mid : ', mid);

		let ans = divisorSum(nums, mid);
		console.log(ans);

		if (ans <= threshold) {
			res = mid;
			high = mid - 1;
		} else {
			low = mid + 1;
		}
	}

	return res;
}

function divisorSum(nums: number[], mid: number): number {
	let sum = 0;
	for (const num of nums) {
		sum += Math.ceil(num / mid);
	}
	return sum;
}
// console.log(smallestDivisor([1, 2, 5, 9], 6));
// console.log(smallestDivisor([44, 22, 33, 11, 1], 5));
// console.log(smallestDivisor([200, 100, 14], 10));
