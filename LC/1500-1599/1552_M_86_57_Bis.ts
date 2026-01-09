// Striver 4.2.8
function maxDistance(position: number[], m: number): number {
	let res = 0;

	position = position.sort((a, b) => a - b);

	let low = 1;
	let high = position[position.length - 1] - position[0];

	while (low <= high) {
		let mid = Math.floor((low + high) / 2);

		let possible = possWithDist(position, mid);

		if (possible >= m) {
			res = mid;
			low = mid + 1;
		} else {
			high = mid - 1;
		}
	}

	return res;
}

function possWithDist(position: number[], mid: number): number {
	let res = 1;
	let tempStart = 0;

	for (let i = 0; i < position.length; i++) {
		if (position[i] - position[tempStart] >= mid) {
			res++;
			tempStart = i;
		}
	}
	return res;
}

// console.log(maxDistance([0, 3, 4, 7, 10, 9], 4));
console.log(maxDistance([5, 4, 3, 2, 1, 1000000000], 2));
