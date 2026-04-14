// Striver 15.2.7
// O(mn), O(mn)
function updateMatrix(mat: number[][]): number[][] {
	const m: number = mat.length;
	const n: number = mat[0].length;

	const res: number[][] = Array.from({ length: m }, () => new Array(n).fill(Infinity));
	const queue: number[][] = [];

	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (mat[i][j] === 0) {
				res[i][j] = 0;
				queue.push([i, j]);
			}
		}
	}

	const dirs = [
		[-1, 0],
		[1, 0],
		[0, -1],
		[0, 1],
	];

	while (queue.length) {
		const [r, c] = queue.shift()!;

		for (const [dr, dc] of dirs) {
			const nr: number = r + dr;
			const nc: number = c + dc;

			if (nr >= 0 && nr < m && nc >= 0 && nc < n && res[nr][nc] === Infinity) {
				res[nr][nc] = res[r][c] + 1;
				queue.push([nr, nc]);
			}
		}
	}

	return res;
}
