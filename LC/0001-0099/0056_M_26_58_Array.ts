function merge(intervals: number[][]): number[][] {
	let len = intervals.length;
	intervals.sort((a, b) => a[0] - b[0]);

	let i = 1;
	while (i < len) {
		while (i < len && intervals[i - 1][1] >= intervals[i][0]) {
			intervals[i - 1][1] = Math.max(intervals[i - 1][1], intervals[i][1]);
			intervals.splice(i, 1);
			len--;
		}
		i++;
	}

	return intervals;
}

console.log(
	merge([
		[1, 3],
		[2, 6],
		[8, 10],
		[15, 18],
	])
);
console.log(
	merge([
		[1, 4],
		[4, 5],
	])
);
console.log(
	merge([
		[4, 7],
		[1, 4],
	])
);
console.log(merge([[1, 3]]));
console.log(
	merge([
		[1, 4],
		[0, 2],
		[3, 5],
	])
);
