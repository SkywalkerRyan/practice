// Striver 13.3.14
function flatten(root: TreeNode | null): void {
	if (root === null) return;

	let prev = { node: null };

	return traverseFlatten(root, prev);
}

function traverseFlatten(node: TreeNode | null, prev: { node: TreeNode | null }): void {
	if (node === null) return;

	traverseFlatten(node.right, prev);
	traverseFlatten(node.left, prev);

	node.right = prev.node;
	node.left = null;
	prev.node = node;
}
