// Striver 7.2.3
function subsets(nums: number[]): number[][] {
	let res = [];

	backtrackSubset(nums, res, 0, []);

	return res;
}

function backtrackSubset(nums: number[], res: number[][], ids: number, current: number[]) {
	if (ids >= nums.length) {
		res.push(current);
		return;
	}

	backtrackSubset(nums, res, ids + 1, current);
	backtrackSubset(nums, res, ids + 1, [...current, nums[ids]]);
}
console.log(subsets([3, 1, 2]));
