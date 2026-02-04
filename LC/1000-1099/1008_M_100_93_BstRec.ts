// Strivet 14.2.8
function bstFromPreorder(preorder: number[]): TreeNode | null {
	let param = { idx: 0 };
	return helperBstFromPreorder(preorder, -Infinity, Infinity, param);
}

function helperBstFromPreorder(
	// node: TreeNode | null,
	preorder: number[],
	min: number | null,
	max: number | null,
	param: { idx: number }
): TreeNode | null {
	if (param.idx >= preorder.length || preorder[param.idx] > max || preorder[param.idx] < min) return null;

	let node = new TreeNode(preorder[param.idx]);
	param.idx = param.idx + 1;

	node.left = helperBstFromPreorder(preorder, min, node.val, param);
	node.right = helperBstFromPreorder(preorder, node.val, max, param);

	return node;
}
