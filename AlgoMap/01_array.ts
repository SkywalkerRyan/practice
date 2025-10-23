function findClosestNumber(nums: number[]): number {
	let closest = nums[0];

	for (let i = 0; i < nums.length; i++) {
		if (Math.abs(nums[i]) < Math.abs(closest)) {
			closest = nums[i];
		}
		if (Math.abs(nums[i]) === Math.abs(closest)) {
			closest = Math.max(nums[i], closest);
		}
	}

	return closest;
}

// console.log(findClosestNumber([2, 1, 1, -1, 100000]));
// console.log(findClosestNumber([2, -1, 1]));
// console.log(findClosestNumber([-100000, -100000]));

function mergeAlternately(word1: string, word2: string): string {
	let res = '';

	let i = 0;

	while (word1[i] || word2[i]) {
		if (word1[i]) res += word1[i];
		if (word2[i]) res += word2[i];
		i++;
	}

	return res;
}

// console.log(mergeAlternately('abc', 'pqr'));
// console.log(mergeAlternately('ab', 'pqrs'));
console.log(mergeAlternately('abcd', 'pq'));
