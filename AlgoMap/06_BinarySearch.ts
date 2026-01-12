// 0278
var solution = function (isBadVersion: any) {
	return function (n: number): number {
		if (n <= 1) return n;
		let res = 0;

		let low = 1;
		let high = n;

		while (low <= high) {
			let mid = Math.floor((low + high) / 2);

			if (isBadVersion(mid)) {
				res = mid;
				high = mid - 1;
			} else low = mid + 1;
		}

		return res;
	};
};
