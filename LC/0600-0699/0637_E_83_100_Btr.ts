// AlgoMap 08.10
function averageOfLevels(root: TreeNode | null): number[] {
	if (root === null) return [];

	let queue = [root];
	let res = [];

	while (queue.length > 0) {
		let len = queue.length;
		let tempRes = 0;
		let tempCnt = 0;

		for (let i = 0; i < len; i++) {
			let cur = queue.shift();
			tempRes += cur.val;
			tempCnt++;

			if (cur.left) queue.push(cur.left);
			if (cur.right) queue.push(cur.right);
		}

		res.push(tempRes / tempCnt);
	}

	return res;
}
