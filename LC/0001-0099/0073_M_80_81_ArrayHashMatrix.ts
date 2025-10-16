function setZeroes(matrix: number[][]): void {
	let rows: Set<number> = new Set();
	let cols: Set<number> = new Set();

	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[0].length; j++) {
			if (matrix[i][j] === 0) {
				rows.add(j);
				cols.add(i);
			}
		}
	}

	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[0].length; j++) {
			if (rows.has(j) || cols.has(i)) {
				matrix[i][j] = 0;
			}
		}
	}

	console.log(matrix);
}

setZeroes([
	[1, 1, 1],
	[1, 0, 1],
	[1, 1, 1],
]);
setZeroes([
	[0, 1, 2, 0],
	[3, 4, 5, 2],
	[1, 3, 1, 5],
]);
