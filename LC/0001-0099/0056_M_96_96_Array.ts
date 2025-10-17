function mergeIntervals2(intervals: number[][]): number[][] {
	intervals.sort((a, b) => a[0] - b[0]);
	let newArr = [];

	for (let i = 0; i < intervals.length; i++) {
		const last = newArr.length - 1;

		if (i == 0 || intervals[i][0] > newArr[last][1]) newArr.push(intervals[i]);
		else {
			newArr[last][1] = Math.max(newArr[last][1], intervals[i][1]);
		}
	}

	return newArr;
}

console.log(
	mergeIntervals2([
		[1, 3],
		[2, 6],
		[8, 10],
		[15, 18],
	])
);
console.log(
	mergeIntervals2([
		[1, 4],
		[4, 5],
	])
);
console.log(
	mergeIntervals2([
		[4, 7],
		[1, 4],
	])
);
console.log(mergeIntervals2([[1, 3]]));
console.log(
	mergeIntervals2([
		[1, 4],
		[0, 2],
		[3, 5],
	])
);
