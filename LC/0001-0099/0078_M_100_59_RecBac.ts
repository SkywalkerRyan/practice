// Striver 7.2.3, AM 10.1
function subsets(nums: number[]): number[][] {
	let res = [];

	backtrackSubset(nums, [], res);

	return res;
}

function backtrackSubset(nums: number[], ids: number[], res: number[][]) {
	if (ids.length === nums.length) {
		let number = [];
		for (let i = 0; i < ids.length; i++) {
			if (ids[i] === 1) number.push(nums[i]);
		}

		res.push(number);
		return;
	}

	backtrackSubset(nums, [...ids, 0], res);
	backtrackSubset(nums, [...ids, 1], res);
}
console.log(subsets([1, 2, 3]));
