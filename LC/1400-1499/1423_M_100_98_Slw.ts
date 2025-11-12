function maxScore(cardPoints: number[], k: number): number {
	let lSum = 0;
	let rSum = 0;

	for (let i = 0; i < k; i++) {
		lSum += cardPoints[i];
	}

	let len = cardPoints.length;
	let res = lSum;

	for (let i = 1; i <= k; i++) {
		lSum -= cardPoints[k - i];
		rSum += cardPoints[len - i];
		res = Math.max(res, lSum + rSum);
	}

	return res;
}

console.log(maxScore([1, 2, 3, 4, 5, 6, 1], 3));
// console.log(maxScore([2, 2, 2], 2));
// console.log(maxScore([9, 7, 7, 9, 7, 7, 9], 7));
// console.log(maxScore([100, 40, 17, 9, 73, 75], 3));
