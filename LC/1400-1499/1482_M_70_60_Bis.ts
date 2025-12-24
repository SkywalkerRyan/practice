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
		if (bloomDay[i] <= day) {
			temp++;
			if (temp === k) {
				cnt++;
				temp = 0;
			}
		} else temp = 0;
	}

	return cnt;
}
// console.log(minDays([1, 10, 3, 10, 2], 3, 1));
console.log(minDays([1, 10, 3, 10, 2], 3, 2));
