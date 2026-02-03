// Striver 14.2.6
function isValidBST(root: TreeNode | null): boolean {
	if (root === null) return true;

	let prev = { val: null };

	return helperIsValidBST(root, prev);
}

function helperIsValidBST(node: TreeNode | null, prev: { val: number | null }): boolean {
	if (node === null) return true;

	if (!helperIsValidBST(node.left, prev)) return false;
	if (prev.val !== null && node.val <= prev.val) return false;
	prev.val = node.val;
	if (!helperIsValidBST(node.right, prev)) return false;

	return true;
}
