// Striver 13.2.6
function zigzagLevelOrder(root: TreeNode | null): number[][] {
	if (root === null) return [];

	let res = [];
	let queue = [root];
	let forward = true;

	while (queue.length > 0) {
		let len = queue.length;
		let temp = [];

		for (let index = 0; index < len; index++) {
			let pop = queue.shift();

			if (pop.left != null) queue.push(pop.left);
			if (pop.right != null) queue.push(pop.right);

			if (forward) temp.push(pop.val);
			else temp.unshift(pop.val);
		}
		res.push([...temp]);
		forward = !forward;
	}

	return res;
}
