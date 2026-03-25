function constructProductMatrix(grid: number[][]): number[][] {
	const MOD = 12345;
	let m = grid.length;
	let n = grid[0].length;
	let o = m * n;

	let pref = new Array(o).fill(1);
	let suff = new Array(o).fill(1);

	for (let i = 1; i < o; i++) {
		let row = Math.floor((i - 1) / n);
		let col = (i - 1) % n;

		pref[i] = (pref[i - 1] * grid[row][col]) % MOD;
	}
	for (let i = o - 2; i >= 0; i--) {
		let sufRow = Math.floor((i + 1) / n);
		let sufCol = (i + 1) % n;
		suff[i] = (suff[i + 1] * grid[sufRow][sufCol]) % MOD;
	}

	let retGrid: number[][] = [];

	for (let i = 0; i < o; i++) {
		let row = Math.floor(i / n);
		let col = i % n;

		if (!retGrid[row]) retGrid[row] = [];

		retGrid[row][col] = (pref[i] * suff[i]) % MOD;
	}

	return retGrid;
}
