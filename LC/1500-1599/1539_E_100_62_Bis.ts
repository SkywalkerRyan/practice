// Striver 4.2.7
function findKthPositive(arr: number[], k: number): number {
	let low = 0;
	let high = arr.length - 1;
	while (low <= high) {
		let mid = Math.floor((low + high) / 2);

		let count = findMissCount(arr, mid);

		if (count >= k) {
			high = mid - 1;
		} else low = mid + 1;
	}

	return low + k;
}

function findMissCount(arr: number[], mid: number): number {
	return arr[mid] - mid - 1;
}

// console.log(findKthPositive([2, 3, 4, 7, 11], 5));
// console.log(findKthPositive([1, 2, 3, 4], 2));
console.log(findKthPositive([2], 1));
