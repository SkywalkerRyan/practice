// Striver 13.3.3
function widthOfBinaryTree(root: TreeNode | null): number {
	if (root === null) return 0;

	let queue: [TreeNode, number][] = [[root, 1]];
	let width = 0;

	while (queue.length > 0) {
		let len = queue.length;
		let min = queue[0][1];
		let max = queue[len - 1][1];

		let temp: [TreeNode, number][] = [];

		for (let i = 0; i < len; i++) {
			let [cur, val] = queue[i];
			let baseVal = val - min;

			if (cur.left != null) temp.push([cur.left, baseVal * 2]);
			if (cur.right != null) temp.push([cur.right, baseVal * 2 + 1]);
		}
		queue = temp;
		width = Math.max(width, max - min + 1);
	}

	re