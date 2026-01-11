// Striver 4.3.4
function findPeakGrid(mat: number[][]): number[] {
	let m = mat.length;
	let n = mat[0].length;

	let left = 0;
	let right = n - 1;

	while (left <= right) {
		let midCol = Math.floor((left + right) / 2);

		let maxRow = 0;

		for (let i = 1; i < m; i++) {
			if (mat[i][midCol] > mat[maxRow][midCol]) maxRow = i;
		}
		const isLeftSmaller = midCol === 0 || mat[maxRow][midCol - 1] < mat[maxRow][midCol];
		const isRightSmaller = midCol === n - 1 || mat[maxRow][midCol] > mat[maxRow][midCol + 1];

		if (isLeftSmaller && isRightSmaller) return [maxRow, midCol];
		else if (isLeftSmaller) left = midCol + 1;
		else right = midCol - 1;
	}

	return [-1, -1];
}

// console.log(
// 	findPeakGrid([
// 		[1, 4],
// 		[3, 2],
// 	])
// );

console.log(
	findPeakGrid([
		[70, 50, 40, 30, 20],
		[100, 1, 2, 3, 4],
	])
);
