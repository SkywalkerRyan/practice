// Striver 15.2.12
// O(mn), O(min(m,n))
function numIslands(grid: string[][]): number {
	const dirs = [
		[-1, 0],
		[1, 0],
		[0, -1],
		[0, 1],
	];

	function markVisited(r: number, c: number): void {
		let queue = [[r, c]];

		while (queue.length) {
			const [qr, qc] = queue.shift()!;
			for (const [dr, dc] of dirs) {
				const nr = qr + dr;
				const nc = qc + dc;

				if (nr >= 0 && nr <= m - 1 && nc >= 0 && nc <= n - 1) {
					if (grid[nr][nc] === '1') {
						grid[nr][nc] = '0';
						queue.push([nr, nc]);
					}
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
