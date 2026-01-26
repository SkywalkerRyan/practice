// Striver 13.2.2
function isBalanced(root: TreeNode | null): boolean {
	if (root === null) return true;

	let cnt = traverseIsBalanced(root);

	return cnt !== -1;
}

function traverseIsBalanced(root: TreeNode | null): number {
	if (root === null) return 0;

	let leftCnt = traverseIsBalanced(root.left);
	if (leftCnt === -1) return -1;
	let rightCnt = traverseIsBalanced(root.right);
	if (rightCnt === -1) return -1;

	if (Math.abs(leftCnt - rightCnt) > 1) return -1;
	return 1 + Math.max(leftCnt, rightCnt);
}
