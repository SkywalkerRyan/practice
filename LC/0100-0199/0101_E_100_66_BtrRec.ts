// Striver 13.2.12
function isSymmetric(root: TreeNode | null): boolean {
	if (root === null) return true;
	if (root.left === null && root.right === null) return true;

	return traverseSymmetry(root.left, root.right);
}

function traverseSymmetry(node1: TreeNode | null, node2: TreeNode | null): boolean {
	if (node1 === null && node2 === null) return true;
	if (node1 === null || node2 === null) return false;
	if (node1.val !== node2.val) return false;

	return traverseSymmetry(node1.left, node2.right) && traverseSymmetry(node1.right, node2.left);
}
