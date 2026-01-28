// Striver 13.3.2
function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
	if (root === null || root === p || root === q) return root;

	let left = lowestCommonAncestor(root.left, p, q);
	let right = lowestCommonAncestor(root.right, p, q);

	if (left === null) return right;
	else if (right === null) return left;
	else return root;
}
