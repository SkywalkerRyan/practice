// AlgoMap 08.1
function invertTree(root: TreeNode | null): TreeNode | null {
	helperInvert(root);

	return root;
}

function helperInvert(node: TreeNode | null): void {
	if (node === null) return;

	let temp = node.left;
	node.left = node.right;
	node.right = temp;

	helperInvert(node.left);
	helperInvert(node.right);
}
