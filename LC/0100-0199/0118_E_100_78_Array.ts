function generatePascal(num: number): number[][] {
	let newMatrix: number[][] = [];

	for (let i = 0; i <= num - 1; i++) {
		let newArr: number[] = [];

		for (let j = 0; j <= i; j++) {
			let temp: number = 1;

			if (j !== 0 && j !== i) {
				temp = newMatrix[i - 1][j - 1] + newMatrix[i - 1][j];
			}
			newArr.push(temp);
		}
		newMatrix.push(newArr);
	}

	return newMatrix;
}

console.log(generatePascal(5));
// console.log(generatePascal(1));
