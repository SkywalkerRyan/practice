// Striver 15.2.12
function numIslands(grid: string[][]): number {
	const dirs = [
		[-1, 0],
		[1, 0],
		[0, -1],
		[0, 1],
	];

	function markVisited(r: number, c: number): void {
		for (const [dr, dc] of dirs) {
			const nr = r + dr;
			const nc = c + dc;

			if (nr >= 0 && nr <= m - 1 && nc >= 0 && nc <= n - 1) {
				if (grid[nr][nc] === '1') {
					grid[nr][nc] = '0';
					markVisited(nr, nc);
				}
			}
		}
	}

	let m: number = grid.length;
	let n: number = grid[0].length;

	let count: number = 0;

	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (grid[i][j] === '1') {
				count++;
				grid[i][j] = '0';
				markVisited(i, j);
			}
		}
	}

	return count;
}
