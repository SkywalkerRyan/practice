// LC 128
// O(n), O(n)
function longestConsecutive(nums: number[]): number {
	let highest = 0;

	let set = new Set(nums);

	let i = 0;
	while (set.size > 0) {
		let tempSize = 0;

		let cur = set.values().next().value;
		set.delete(cur!);
		tempSize = 1;
		let curNext = cur!;
		let curPrev = cur!;

		while (set.has(curNext + 1)) {
			curNext = curNext + 1;
			tempSize++;
			set.delete(curNext);
		}

		while (set.has(curPrev - 1)) {
			curPrev = curPrev - 1;
			tempSize++;
			set.delete(curPrev);
		}

		highest = Math.max(highest, tempSize);
	}

	return highest;
}

export default longestConsecutive;
