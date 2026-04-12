// Striver 15.2.3
// O(mn), O(mn)
function orangesRotting(grid: number[][]): number {
	let m: number = grid.length;
	let n: number = grid[0].length;

	let fresh: number = 0;
	let queue: number[][] = [];

	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (grid[i][j] === 1) fresh++;
			if (grid[i][j] === 2) queue.push([i, j]);
		}
	}

	if (fresh === 0) return 0;

	let cycle: number = 0;

	while (queue.length) {
		let len = queue.length;
		let infected = 0;

		for (let l = 0; l < len; l++) {
			let cur = queue.shift()!;
			infected += rotAdjacent(cur[0], cur[1]);
		}
		if (infected > 0) cycle++;
	}

	function rotAdjacent(i: number, j: number): number {
		let count = 0;
		if (i > 0 && grid[i - 1][j] === 1) {
			grid[i - 1][j] = 2;
			queue.push([i - 1, j]);
			fresh--;
			count++;
		}
		if (i < m - 1 && grid[i + 1][j] === 1) {
			grid[i + 1][j] = 2;
			queue.push([i + 1, j]);
			fresh--;
			count++;
		}
		if (j > 0 && grid[i][j - 1] === 1) {
			grid[i][j - 1] = 2;
			queue.push([i, j - 1]);
			fresh--;
			count++;
		}
		if (j < n - 1 && grid[i][j + 1] === 1) {
			grid[i][j + 1] = 2;
			queue.push([i, j + 1]);
			fresh--;
			count++;
		}
		return count;
	}

	return fresh > 0 ? -1 : cycle;
}
