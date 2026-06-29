// LC 128
// O(n), O(n)
function longestConsecutive(nums: number[]): number {
	let highest = 0;

	let set: Set<number> = new Set(nums);

	for (const num of set) {
		if (set.has(num - 1)) continue;

		let temp = 1;
		let cur = num;

		while (set.has(cur + 1)) {
			temp++;
			cur++;
		}

		highest = Math.max(highest, temp);
	}
	return highest;
}
