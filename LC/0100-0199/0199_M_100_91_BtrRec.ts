// Striver 13.2.11
function rightSideView(root: TreeNode | null): number[] {
	if (root === null) return [];

	let res = [];

	traverseRighSideView(root, 0, res);

	return res;
}

function traverseRighSideView(node: TreeNode | null, row: number, res: number[]): void {
	if (node === null) return;

	if (res.length === row) res.push(node.val);

	if (node.right != null) traverseRighSideView(node.right, row + 1, res);
	if (node.left != null) traverseRighSideView(node.left, row + 1, res);
}
