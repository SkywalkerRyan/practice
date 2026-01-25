// 0145
function postorderTraversal(root: TreeNode | null): number[] {
	let res = [];

	travPostOrder(res, root);

	return res;
}

function travPostOrder(res: number[], node: TreeNode | null): void {
	if (node === null) return;

	travPostOrder(res, node.left);
	travPostOrder(res, node.right);
	res.push(node.val);
}
