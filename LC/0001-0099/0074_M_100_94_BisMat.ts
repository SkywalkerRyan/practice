// Striver 4.3.2, AlgoMap 6.5
function searchMatrix(matrix: number[][], target: number): boolean {
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
	let right = matrix[0].length;

	while (left <= right) {
		let mid = Math.floor((left + right) / 2);

		if (matrix[row][mid] === target) return true;

		if (matrix[row][mid] < target) left = mid + 1;
		else right = mid - 1;
	}
	return false;
}

console.log(
	searchMatrix(
		[
			[1, 3, 5, 7],
			[10, 11, 16, 20],
			[23, 30, 34, 60],
		],
		3
	)
);
