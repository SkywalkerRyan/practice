// Striver 13.2.3
function diameterOfBinaryTree(root: TreeNode | null): number {
	if (root === null) return 0;

	let max = { val: 0 };
	traverseDiameter(root, max);

	return max.val;
}

function traverseDiameter(node: TreeNode | null, max: { val: number }): number {
	if (node === null) return 0;

	let leftCnt = traverseDiameter(node.left, max);
	let rightCnt = traverseDiameter(node.right, max);

	max.val = Math.max(max.val, leftCnt + rightCnt);

	return 1 + Math.max(leftCnt, rightCnt);
}
