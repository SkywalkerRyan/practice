// Striver 13.1.8
function levelOrder(root: TreeNode | null): number[][] {
	if (root === null) return [];

	let res = [];

	let queue = [root];

	while (queue.length > 0) {
		let queueSize = queue.length;
		let tempRes = [];

		for (let i = 0; i < queueSize; i++) {
			let val = queue.shift();

			tempRes.push(val.val);

			if (val.left) queue.push(val.left);
			if (val.right) queue.push(val.right);
		}
		res.push(tempRes);
	}

	return res;
}
