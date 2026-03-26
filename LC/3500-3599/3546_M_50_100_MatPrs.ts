function canPartitionGrid(grid: number[][]): boolean {
	let m = grid.length;
	let n = grid[0].length;
	let o = m * n;

	let pref = new Array(o + 1).fill(0);
	let prefCol = new Array(o + 1).fill(0);
	let totSum = 0;

	for (let i = 1; i <= o; i++) {
		let row = Math.floor((i - 1) / n);
		let col = (i - 1) % n;

		let cRow = (i - 1) % m;
		let cCol = Math.floor((i - 1) / m);

		pref[i] = pref[i - 1] + grid[row][col];
		prefCol[i] = prefCol[i - 1] + grid[cRow][cCol];
		totSum += grid[row][col];
	}

	for (let i = 1; i < o; i++) {
		if (i % n === 0 && pref[i] === totSum / 2) return true;
		if (i % m === 0 && prefCol[i] === totSum / 2) return true;
	}

	return false;
}
