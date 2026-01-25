import { TreeNode } from '../../Practices/BinaryTrees/node';
// 0144
function preorderTraversal(root: TreeNode | null): number[] {
	let res = [];

	travPreOrder(res, root);

	return res;
}

function travPreOrder(res: number[], node: TreeNode | null): void {
	if (node === null) return;

	res.push(node.val);
	travPreOrder(res, node.left);
	travPreOrder(res, node.right);
}
