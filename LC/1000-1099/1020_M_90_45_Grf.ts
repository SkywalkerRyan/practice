// Striver 15.2.9
// O(mn), O(mn)
function numEnclaves(grid: number[][]): number {
	const dirs = [
		[-1, 0],
		[1, 0],
		[0, -1],
		[0, 1],
	];

	function markSafe(r: number, c: number): void {
		for (const [dr, dc] of dirs) {
			const nr = r + dr;
			const nc = c + dc;

			if (nr > 0 && nr < m - 1 && nc > 0 && nc < n - 1) {
				if (grid[nr][nc] === 1) {
					grid[nr][nc] = 0;
					markSafe(nr, nc);
				}
			}
		}
	}

	let m: number = grid.length;
	let n: number = grid[0].length;

	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (i === 0 || i === m - 1 || j === 0 || j === n - 1) {
				if (grid[i][j] === 1) {
					grid[i][j] = 0;
					markSafe(i, j);
				}
			}
		}
	}

	let count: number = 0;

	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (grid[i][j] === 1) count++;
		}
	}

	return count;
}
