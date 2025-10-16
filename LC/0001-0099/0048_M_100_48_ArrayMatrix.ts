function rotate(matrix: number[][]): void {
	for (let i = 0; i < matrix.length; i++) {
		for (let j = i; j < matrix[0].length; j++) {
			const temp = matrix[i][j];
			matrix[i][j] = matrix[j][i];
			matrix[j][i] = temp;
		}
	}

	for (let i = 0; i < matrix.length; i++) {
		let first = 0;
		let last = matrix[0].length - 1;

		while (first < last) {
			const temp = matrix[i][first];
			matrix[i][first] = matrix[i][last];
			matrix[i][last] = temp;
			first++;
			last--;
		}
	}

	console.log(matrix);
}
rotate([
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
]);
rotate([
	[5, 1, 9, 11],
	[2, 4, 8, 10],
	[13, 3, 6, 7],
	[15, 14, 12, 16],
]);
