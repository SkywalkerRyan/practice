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
// console.log(mergeAlternately('abcd', 'pq'));

function isSubsequence(s: string, t: string): boolean {
	let j = 0;

	for (let i = 0; i < t.length; i++) {
		if (s[j] === t[i]) j++;
	}

	return j === s.length;
}

// console.log(isSubsequence('abc', 'ahbgdc'));
// console.log(isSubsequence('axc', 'ahbgdc'));

function summaryRanges1(nums: number[]): string[] {
	if (nums.length === 0) return [];

	let res = [];
	let len = nums.length;
	let temp = 0;

	for (let i = 1; i <= len; i++) {
		if (nums[i] - nums[i - 1] > 1) {
			if (i - 1 === temp) res.push(nums[temp].toString());
			else res.push(nums[temp] + '->' + nums[i - 1]);

			temp = i;
		}
	}

	if (len - 1 === temp) res.push(nums[temp].toString());
	else res.push(nums[temp] + '->' + nums[len - 1]);

	return res;
}

function removeElement(nums: number[], val: number): number {
	let j = 0;
	let i = 0;

	while (i < nums.length) {
		if (nums[i] !== val) {
			nums[j] = nums[i];
			j++;
		}
		i++;
	}

	return j;
}

console.log(removeElement([3, 2, 2, 3], 3));
// console.log(removeElement([1], 1));
