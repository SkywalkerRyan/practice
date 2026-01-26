// 0104
function maxDepth(root: TreeNode | null): number {
	let res = 0;

	let queue = [root];

	while (queue.length > 0) {
		let len = queue.length;

		for (let i = 0; i < len; i++) {
			let temp = queue.shift();

			if (temp.left) queue.push(temp.left);
			if (temp.right) queue.push(temp.right);
		}
		res++;
	}

	return res;
}

// 0104
function maxDepth(root: TreeNode | null): number {
	if (root === null) return 0;

	let res = 0;

	res = traverseMaxDepth(root, res);

	return res;
}

function traverseMaxDepth(node: TreeNode | null, count: number): number {
	if (node === null) return count;

	let leftCnt = 0;
	let rightCnt = 0;

	if (node.left != null) leftCnt = traverseMaxDepth(node.left, count);
	if (node.right != null) rightCnt = traverseMaxDepth(node.right, count);

	return 1 + Math.max(leftCnt, rightCnt);
}

// 0104
function maxDepthRec(root: TreeNode | null): number {
	if (root === null) return 0;

	return 1 + Math.max(maxDepthRec(root.left), maxDepthRec(root.right));
}
