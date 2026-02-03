// Striver 14.2.6
function isValidBST(root: TreeNode | null): boolean {
	return helperIsValidBST(root, null, null);
}

function helperIsValidBST(node: TreeNode | null, min: number | null, max: number | null): boolean {
	if (node === null) return true;

	if (min !== null && node.val <= min) return false;
	if (max !== null && node.val >= max) return false;

	return helperIsValidBST(node.left, min, node.val) && helperIsValidBST(node.right, node.val, max);
}
