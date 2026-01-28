// Striver 13.3.3
function widthOfBinaryTree(root: TreeNode | null): number {
	if (root === null) return 0;

	let queue: [TreeNode, number][] = [[root, 1]];
	let width = 0;

	while (queue.length > 0) {
		let len = queue.length;
		let temp: [TreeNode, number][] = [];
		let min = 0;
		let max = 0;

		for (let i = 0; i < len; i++) {
			let [cur, val] = queue.shift();

			if (i === 0) min = val;
			if (i === len - 1) max = val;

			if (cur.left != null) temp.push([cur.left, (val - min) * 2]);
			if (cur.right != null) temp.push([cur.right, (val - min) * 2 + 1]);
		}
		queue.push(...temp);
		width = Math.max(width, max - min + 1);
	}

	return width;
}
