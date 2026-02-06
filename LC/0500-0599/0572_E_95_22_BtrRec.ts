// AlgoMap 08.8
function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
	if (root === null) return false;

	if (isSameTree(root, subRoot)) return true;

	return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
}

function isSameTree(node1: TreeNode | null, node2: TreeNode | null): boolean {
	if (node1 === null && node2 === null) return true;
	if (node1 === null || node2 === null) return false;
	if (node1.val !== node2.val) return false;

	return isSameTree(node1.left, node2.left) && isSameTree(node1.right, node2.right);
}
