// LC 0414
// O(n log n), O(n)
function thirdMax(nums: number[]): number {
	let tempSet: Set<number> = new Set(nums);

	// for (let i = 0; i < nums.length; i++) {
	// 	tempSet.add(nums[i]);
	// }

	if (tempSet.size < 3) return Math.max(...tempSet);

	let tempArr: number[] = [...tempSet].sort((a, b) => b - a);
	return tempArr[2];
}
