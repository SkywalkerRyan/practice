// Striver 13.2.1
function maxDepthRec(root: TreeNode | null): number {
	if (root === null) return 0;

	return 1 + Math.max(maxDepthRec(root.left), maxDepthRec(root.right));
}
