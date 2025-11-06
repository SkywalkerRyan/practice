function maximalRectangle(matrix: string[][]): number {
	let res = 0;

	let newArr = Array.from({ length: matrix.length }, () => []);
	for (let i = 0; i < matrix[0].length; i++) {
		let temp = 0;

		for (let j = 0; j < matrix.length; j++) {
			if (matrix[j][i] === '0') temp = 0;
			else temp += 1;

			newArr[j][i] = temp;
		}
	}

	for (let i = 0; i < matrix.length; i++) {
		let square = largestRectangleArea(newArr[i]);

		res = Math.max(res, square);
	}

	return res;
}

console.log(
	maximalRectangle([
		['1', '0', '1', '0', '0'],
		['1', '0', '1', '1', '1'],
		['1', '1', '1', '1', '1'],
		['1', '0', '0', '1', '0'],
	])
);
// console.log(maximalRectangle([['0']]));
// console.log(maximalRectangle([['1']]));
