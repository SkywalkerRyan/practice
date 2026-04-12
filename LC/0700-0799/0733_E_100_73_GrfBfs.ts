// Striver 15.2.4
// O(mn), O(mn)
function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
	let initColor = image[sr][sc];
	if (initColor === color) return image;

	let m: number = image.length;
	let n: number = image[0].length;

	let queue: number[][] = [[sr, sc]];
	image[sr][sc] = color;

	while (queue.length) {
		let cur = queue.shift()!;
		rotAdjacent(cur[0], cur[1]);
	}

	function rotAdjacent(i: number, j: number): void {
		if (i > 0 && image[i - 1][j] === initColor) {
			image[i - 1][j] = color;
			queue.push([i - 1, j]);
		}
		if (i < m - 1 && image[i + 1][j] === initColor) {
			image[i + 1][j] = color;
			queue.push([i + 1, j]);
		}
		if (j > 0 && image[i][j - 1] === initColor) {
			image[i][j - 1] = color;
			queue.push([i, j - 1]);
		}
		if (j < n - 1 && image[i][j + 1] === initColor) {
			image[i][j + 1] = color;
			queue.push([i, j + 1]);
		}
	}

	return image;
}
