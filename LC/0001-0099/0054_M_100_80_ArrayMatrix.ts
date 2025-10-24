function spiralOrder(matrix: number[][]): number[] {
	const newArr: number[] = [];

	let top = 0;
	let left = 0;
	let bottom = matrix.length - 1;
	let right = matrix[0].length - 1;

	let i = 0;

	while (left <= right && top <= bottom) {
		i = left;
		while (i <= right) {
			newArr.push(matrix[top][i]);
			i++;
		}
		top++;

		i = top;
		while (i <= bottom) {
			newArr.push(matrix[i][right]);
			i++;
		}
		right--;

		if (bottom >= top) {
			i = right;
			while (i >= left) {
				newArr.push(matrix[bottom][i]);
				i--;
			}
			bottom--;
		}

		if (right >= left) {
			i = bottom;
			while (i >= top) {
				newArr.push(matrix[i][left]);
				i--;
			}
			left++;
		}
	}

	return newArr;
}

// console.log(
// 	spiralOrder([
// 		[1, 2, 3],
// 		[4, 5, 6],
// 		[7, 8, 9],
// 	])
// );
console.log(
	spiralOrder([
		[1, 2, 3, 4],
		[5, 6, 7, 8],
		[9, 10, 11, 12],
	])
);
