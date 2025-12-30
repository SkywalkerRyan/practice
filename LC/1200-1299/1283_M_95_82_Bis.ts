// Striver 4.2.5
function smallestDivisor(nums: number[], threshold: number): number {
	let res = 0;

	let low = 1;
	let high = Math.max(...nums);

	while (low <= high) {
		let mid = Math.floor((low + high) / 2);
		console.log('mid : ', mid);

		let ans = divisorSum(nums, mid);
		console.log(ans);

		if (ans <= threshold) {
			res = mid;
			high = mid - 1;
		} else {
			low = mid + 1;
		}
	}

	return res;
}

function divisorSum(nums: number[], mid: number): number {
	let sum = 0;
	for (const num of nums) {
		sum += Math.ceil(num / mid);
	}
	return sum;
}
// console.log(smallestDivisor([1, 2, 5, 9], 6));
// console.log(smallestDivisor([44, 22, 33, 11, 1], 5));
console.log(smallestDivisor([200, 100, 14], 10));
