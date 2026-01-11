// Striver 4.3.1
function rowWithMaxOnes(matrix: number[][]): number {
	let res = -1;
	let max = 0;
	for (let i = 0; i < matrix.length; i++) {
		let width = matrix[0].length;

		let temp = width - 1;
		let tempRes = 0;
		while (matrix[i][temp] > 0) {
			if (matrix[i][temp] === 1) tempRes++;
			temp--;
		}
		if (tempRes > max) {
			max = tempRes;
			res = i;
		}
	}
	return res;
}

// console.log(
// 	rowWithMaxOnes([
// 		[0, 1, 1],
// 		[1, 1, 1],
// 		[0, 0, 0],
// 	])
// );
// console.log(
// 	rowWithMaxOnes([
// 		[0, 0],
// 		[0, 0],
// 	])
// );

// 0074
function searchMatrix1(matrix: number[][], target: number): boolean {
	let top = 0;
	let bot = matrix.length - 1;
	let row = 0;

	while (top <= bot) {
		let mid = Math.floor((top + bot) / 2);

		if (matrix[mid][0] <= target) {
			row = mid;
			top = mid + 1;
		} else bot = mid - 1;
	}

	let left = 0;
	let right = matrix[0].length - 1;

	while (left <= right) {
		let mid = Math.floor((left + right) / 2);

		if (matrix[row][mid] === target) return true;

		if (matrix[row][mid] < target) left = mid + 1;
		else right = mid - 1;
	}
	return false;
}

// console.log(
// 	searchMatrix(
// 		[
// 			[1, 3, 5, 7],
// 			[10, 11, 16, 20],
// 			[23, 30, 34, 60],
// 		],
// 		3
// 	)
// );

// 0240
function searchMatrix2(matrix: number[][], target: number): boolean {
	let m = matrix.length;
	let n = matrix[0].length;

	let row = 0;
	let col = n - 1;

	while (row < m && col >= 0) {
		if (matrix[row][col] === target) return true;

		if (matrix[row][col] > target) col--;
		else row++;
	}

	return false;
}

// console.log(
// 	searchMatrix2(
// 		[
// 			[1, 4, 7, 11, 15],
// 			[2, 5, 8, 12, 19],
// 			[3, 6, 9, 16, 22],
// 			[10, 13, 14, 17, 24],
// 			[18, 21, 23, 26, 30],
// 		],
// 		5
// 	)
// );

// 1901
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
