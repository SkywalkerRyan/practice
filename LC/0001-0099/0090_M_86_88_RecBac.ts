// Striver 7.2.10
function subsetsWithDup(nums: number[]): number[][] {
	let res = [];

	nums = nums.sort((a, b) => a - b);
	backtrackSubsetWithDup([], 0, nums, res);

	return res;
}

function backtrackSubsetWithDup(cur: number[], curIdx: number, nums: number[], res: number[][]): void {
	res.push([...cur]);

	for (let i = curIdx; i < nums.length; i++) {
		if (i > curIdx && nums[i] === nums[i - 1]) continue;

		cur.push(nums[i]);
		backtrackSubsetWithDup(cur, i + 1, nums, res);
		cur.pop();
	}
}
console.log(subsetsWithDup([1, 2, 2]));
