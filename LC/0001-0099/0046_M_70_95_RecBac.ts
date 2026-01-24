// AM 10.2
function permute(nums: number[]): number[][] {
	let res = [];
	let len = nums.length;

	backtrackPermute([], 0, res, nums, len);

	return res;
}

function backtrackPermute(cur: number[], res: number[][], nums: number[], len: number): void {
	if (cur.length === len) {
		res.push([...cur]);
		return;
	}

	for (let i = 0; i < nums.length; i++) {
		let temp = nums.splice(i, 1)[0];
		cur.push(temp);
		backtrackPermute(cur, res, nums, len);
		cur.pop();
		nums.splice(i, 0, temp);
	}
}

console.log(permute([1, 2, 3]));
