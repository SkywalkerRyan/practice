// Striver 13.2.1, AlgoMap 08.2
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
