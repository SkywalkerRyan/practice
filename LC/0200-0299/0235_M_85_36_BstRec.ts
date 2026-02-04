// Striver 14.2.7
function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
	if (root === null) return root;

	if (p.val < root.val && q.val < root.val) return lowestCommonAncestor(root.left, p, q);
	if (p.val > root.val && q.val > root.val) return lowestCommonAncestor(root.right, p, q);

	return root;
}
