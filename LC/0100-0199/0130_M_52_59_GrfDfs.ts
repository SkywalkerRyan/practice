// Striver 15.2.8
// O(mn), O(mn)
function surroundedRegion(board: string[][]): void {
	const dirs = [
		[-1, 0],
		[1, 0],
		[0, -1],
		[0, 1],
	];

	function adjacentZeroes(r: number, c: number): void {
		for (const [dr, dc] of dirs) {
			const nr = r + dr;
			const nc = c + dc;

			if (nr >= 0 && nr < m && nc >= 0 && nc < n && !safe[nr][nc] && board[nr][nc] === 'O') {
				safe[nr][nc] = true;
				adjacentZeroes(nr, nc);
			}
		}
	}

	let m: number = board.length;
	let n: number = board[0].length;

	let safe: boolean[][] = Array.from({ length: m }, () => new Array(n).fill(false));

	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (i === 0 || i === m - 1 || j === 0 || j === n - 1) {
				if (board[i][j] === 'O') {
					safe[i][j] = true;
					adjacentZeroes(i, j);
				}
			}
		}
	}

	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (!safe[i][j]) board[i][j] = 'X';
		}
	}
}
