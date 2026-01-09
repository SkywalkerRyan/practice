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

// console.log(shipWithinDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));
// console.log(shipWithinDays([3, 2, 2, 4, 1, 4], 3));
// console.log(shipWithinDays([1, 2, 3, 1, 1], 4));

// 1539
function findKthPositive(arr: number[], k: number): number {
	let low = 0;
	let high = arr.length - 1;
	while (low <= high) {
		let mid = Math.floor((low + high) / 2);

		let count = findMissCount(arr, mid);

		if (count >= k) {
			high = mid - 1;
		} else low = mid + 1;
	}

	return low + k;
}

function findMissCount(arr: number[], mid: number): number {
	return arr[mid] - mid - 1;
}

// console.log(findKthPositive([2, 3, 4, 7, 11], 5));
// console.log(findKthPositive([1, 2, 3, 4], 2));
// console.log(findKthPositive([2], 1));

// 1552
function maxDistance(position: number[], m: number): number {
	let res = 0;

	position = position.sort((a, b) => a - b);

	let low = 1;
	let high = position[position.length - 1] - position[0];

	while (low <= high) {
		let mid = Math.floor((low + high) / 2);

		let possible = possWithDist(position, mid);

		if (possible >= m) {
			res = mid;
			low = mid + 1;
		} else {
			high = mid - 1;
		}
	}

	return res;
}

function possWithDist(position: number[], mid: number): number {
	let res = 1;
	let tempStart = 0;

	for (let i = 0; i < position.length; i++) {
		if (position[i] - position[tempStart] >= mid) {
			res++;
			tempStart = i;
		}
	}
	return res;
}

// console.log(maxDistance([0, 3, 4, 7, 10, 9], 4));
// console.log(maxDistance([5, 4, 3, 2, 1, 1000000000], 2));
