// 0094
function inorderTraversal(root: TreeNode | null): number[] {
	let res = [];

	travInOrder(res, root);

	return res;
}

function travInOrder(res: number[], node: TreeNode | null): void {
	if (node === null) return;

	travInOrder(res, node.left);
	res.push(node.val);
	travInOrder(res, node.right);
}
